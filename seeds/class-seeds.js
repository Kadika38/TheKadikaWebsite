const { Class } = require('../models');

const classSeeds = [
    {
        name: 'rogue',
        info: 'Rogues are cool',
    },
];

const seedClasses = () => Class.bulkCreate(classSeeds);

module.exports = seedClasses;