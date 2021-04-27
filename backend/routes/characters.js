const router = require('express').Router();
let Character = require('../models/character.model.js');
let Race = require('../models/race.model.js');
let FightClass = require('../models/fightClass.model.js');

router.route('/').get((req, res) => {
    Character.find()
    .then(race => res.json(race))
    .then(fightClass => res.json(fightClass))
    .then(characters => res.json(characters))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
  const data = {...req.body.username};

  const newCharacter = new Character({data});

  newCharacter.save()
    .then(() => res.json('Character added!'))
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;