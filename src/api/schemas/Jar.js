import {Schema} from 'mongoose';
import bcrypt from 'bcrypt';
const SALT_WORK_FACTOR = 10;

const jarSchema = new Schema({
  user: {
    name: String,
    username: {type: String, required: true, index: {unique: true}},
    email: String,
    password: {type: String, required: true},
  },
  swearsSaid: Array,
  costPerSwear: Number,
  swearCount: Number,
  totalCost: Number,
});

jarSchema.pre('save', function(next) {
  const user = this.user;

  if (!this.isModified('user.password')) return next();

  // generate a salt
  bcrypt.genSalt(SALT_WORK_FACTOR, function(err, salt) {
    if (err) return next(err);
    // hash the password using our new salt
    bcrypt.hash(user.password, salt, function(hashErr, hash) {
      if (hashErr) return next(hashErr);

      // override the cleartext password with the hashed one
      user.password = hash;
      next();
    });
  });
});

export default jarSchema;
