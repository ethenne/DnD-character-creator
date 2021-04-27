const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema({
  // id: { type: String, unique: true },
  personId: { type: String },
  login:  { type: String, unique: true, trim: true, minlength: 3 },
  password:  { type: String },
  role:  { type: String },
  // character:  { type: String, unique: true }
});

const User = mongoose.model('User', userSchema);

module.exports = User;