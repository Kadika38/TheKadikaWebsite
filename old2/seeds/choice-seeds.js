const { Choice } = require('../models');

const choiceSeeds = [
    {
        info: 'Learn any one language you don\'t already know',
        pick: 1,
        race_id: 1,
    },
];

const seedChoices = () => Choice.bulkCreate(choiceSeeds);

module.exports = seedChoices;