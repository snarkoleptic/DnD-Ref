const mongoose = require('mongoose');

//Define schema
const racesSchema = new mongoose.Schema({
    name: String,
    abilityScores: Array,
    raceDesc: Array,
    size: String,
    speed: String,
    subRaces: Array,
    bookRef: String
});

const classSchema = new mongoose.Schema({
    name: String,
    equipment: Array,
    hitDice: String,
    lvlFeatures: Array,
    maxAtLvlOne: Number,
    profs: Array,
    spellcasting: Array,
    startingGold: String,
    bookRef: String
});

const bgSchema = new mongoose.Schema({
    name: String,
    email: String
});

//Compile model, User is the Collection name
const Classes = mongoose.model('Classes', classSchema);
const Races = mongoose.model('Races', racesSchema);
const Backgrounds = mongoose.model('Backgrounds', bgSchema);

//Export model
module.exports = {
    Classes,
    Races,
    Backgrounds
};