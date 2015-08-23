import express from 'express';
import mongoose from 'mongoose';
import jarSchema from './schemas/Jar';
import bodyParser from 'body-parser';
import session from 'express-session';

mongoose.connect('mongodb://localhost/swearJars');

const Jar = mongoose.model('Jar', jarSchema);

const app = express();

// CORS settings from http://enable-cors.org/server_expressjs.html
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.use(session({secret: 'someEnvSetting'}));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
const port = process.env.PORT || 5000;

app.get('/', (req, res) => {
  if (req.session.session) {
    let jar = Jar.findOne({'user.username': req.session.username}).exec();
    jar.then(doc => res.send(doc));
  } else {
    res.send('Please log in!');
  }
});

app.get('/register-swear', (req, res) => {
  if (req.session.session) {
    let query = {'user.username': req.session.username};
    let jar = Jar.findOneAndUpdate(query, {$inc: {swearCount: 1}}).exec();
    jar.then(doc => {
      res.send(doc);
    });
  } else {
    res.send('Please log in!');
  }
});

app.post('/user/create', (req, res) => {
  const newUser = new Jar({
    session: true,
    costPerSwear: 1.50,
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
      req.session.session = potentialUser.session;
      req.session.username = potentialUser.user.username;
      if (response) res.send(potentialUser);
      res.send('incorrect password');
    });
  });
});

app.listen(port, () => {
  console.log('Listening on ' + port);
});
