const { ClassFeature } = require('../models');

const classFeatureSeeds = [
    {
        name: 'expertise',
        info: 'At 1st level, choose two of your skill proficiencies, or one of your skill proficiencies and your proficiency with thieves\' tools. Your proficiency bonus is doubled for any ability check you make that uses either of the chosen proficiencies.',
        level_req: 1,
    },
    {
        name: 'expertise',
        info: 'At 6th level, you can choose two more of your proficiencies (in skills or with thieves\' tools) to gain this benefit.',
        level_req: 6,
    }
];

const seedClassFeatures = () => ClassFeature.bulkCreate(classFeatureSeeds);

module.exports = seedClassFeatures;