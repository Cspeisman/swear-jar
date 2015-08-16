import express from 'express';
import mongoose from 'mongoose';
import jarSchema from './schemas/Jar';
import bodyParser from 'body-parser';

mongoose.connect('mongodb://localhost/swearJars');

const Jar = mongoose.model('Jar', jarSchema);

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
const port = process.env.PORT || 5000;

app.get('/', (req, res) => {
  res.send('hello world');
});


app.post('/user/create', (req, res) => {
  const newUser = new Jar({
    session: true,
    user: {
      username: req.body.username,
      password: req.body.password,
      email: req.body.email,
    },
  });

  newUser.save().then((doc) => {
    res.send(doc);
  }).then(null, (err) => {
    res.send(err.message);
  });
});

app.post('/user/login', (req, res) => {
  let user = Jar.findOne({'user.username': req.body.username}).exec();
  user.then(potentialUser => {
    let promise = potentialUser.comparePassword(req.body.password);
    promise.then(response => {
      potentialUser.session = true;
      if (response) res.send(potentialUser);
      res.send('incorrect password');
    });
  });
});

app.listen(port, () => {
  console.log('Listening on ' + port);
});
