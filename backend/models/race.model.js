const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const raceSchema = new Schema({
    id: { type: String, unique: true },
    name: { type: String }

    //TODO add details page link and short description with race abilities
})

const Race = mongoose.model('Race', raceSchema);

module.exports = Race;