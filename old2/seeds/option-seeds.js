const { Option } = require('../models');

const optionSeeds = [
    {
        choice_id: 1,
        thing_id: 13,
    },
    {
        choice_id: 1,
        thing_id: 14,
    },
    {
        choice_id: 1,
        thing_id: 15,
    },
];

const seedOptions = () => Option.bulkCreate(optionSeeds);

module.exports = seedOptions;