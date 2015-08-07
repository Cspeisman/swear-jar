import {Schema} from 'mongoose';

const jarSchema = new Schema({
  user: {
    name: String,
    username: String,
    email: String,
    password: String,
  },
  swearsSaid: Array,
  costPerSwear: Number,
  swearCount: Number,
  totalCost: Number,
});

export default jarSchema;
