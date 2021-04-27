const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const fightClassSchema = new Schema({
  id: { type: String, unique: true },
  name:  { type: String },
  classFeature:  { type: Object },
});

const FightClass = mongoose.model('FightClass', fightClassSchema);

module.exports = FightClass;