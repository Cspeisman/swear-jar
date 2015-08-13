import express from 'express';
import mongoose from 'mongoose';
import jarSchema from './schemas/Jar';

mongoose.connect('mongodb://localhost/swearJars');

const Jar = mongoose.model('Jar', jarSchema);

const app = express();
const port = process.env.PORT || 5000;

app.get('/', (req, res) => {
  res.send('hello world');
});

app.listen(port, () => {
  console.log('Listening on ' + port);
});
