const mongoose = require('mongoose');
const Race = require('./race.model');
const FightClass = require('./fightClass.model')

const Schema = mongoose.Schema;

const characterSchema = new Schema({
    Id: { type: String },
    PersonId: { type: String, unique: true },
    CharacterName: { type: String },
    Level: { type: String },
    Race: { type: Object },
    FightClass: { type: Object },
    Charisma: { type: String },
    Constitution: { type: String },
    Dexterity: { type: String },
    Intelligence: { type: String },
    Strength: { type: String },
    Wisdon: { type: String },
    Hair: { type: String },
    Skin: { type: String },
    Eyes: { type: String },
    Height: { type: String },
    Weight: { type: String },
    Age: { type: String },
    Gender: { type: String },
    PersonalityTraits: { type: String },
    Ideas: { type: String },
    Bonds: { type: String },
    Flaws: { type: String },
    Organizations: { type: String },
    Allies: { type: String },
    Enemies: { type: String },
    Backstory: { type: String },
    Other: { type: String },
    Aligment: { type: String },
    Faith: { type: String },
    Lifestyle: { type: String },
    Description: { type: String },
    ProficiencyLanguageChoices: { type: String },
    BackgroundFeature: { type: String },
    BackgroundCharacteristics: { type: String },
    AttunedMagicItems: { type: String },
    StartingEquipment: { type: String },
    ActiveItems: { type: String },
    OtherPosessions: { type: String },
    AddItems: { type: String },
})

const Character = mongoose.model('Character', characterSchema);

module.exports = Character;