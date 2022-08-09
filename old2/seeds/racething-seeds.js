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
    {
        race_id: 1,
        thing_id: 3,
    },
    {
        race_id: 1,
        thing_id: 4,
    },
];

const seedRaceThings = () => RaceThing.bulkCreate(raceThingSeeds);

module.exports = seedRaceThings;