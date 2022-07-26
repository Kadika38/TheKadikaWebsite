const { Thing } = require('../models');

const thingSeeds = [
    {
        name: 'age',
        type: 'info',
        info: 'Tabaxi have lifespans equivalent to humans.',
    },
    {
        name: 'size',
        type: 'other stat',
        info: 'Tabaxi are taller on average than humans and relatively slender.',
        other_stat: 'size',
        size: 'Medium',
    },
];

const seedThings = () => Thing.bulkCreate(thingSeeds);

module.exports = seedThings;