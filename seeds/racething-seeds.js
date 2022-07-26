const { RaceThing } = require('../models');

const raceThingSeeds = [
    {
        race_id: 1,
        thing_id: 1,
    },
    {
        race_id: 1,
        thing_id: 2,
    },
];

const seedRaceThings = () => RaceThing.bulkCreate(raceThingSeeds);

module.exports = seedRaceThings;