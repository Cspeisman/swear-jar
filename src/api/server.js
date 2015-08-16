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


app.listen(port, () => {
  console.log('Listening on ' + port);
});
