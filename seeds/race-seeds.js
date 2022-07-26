const { Race } = require('../models');

const tabaxi = {
        name: 'tabaxi',
        info: 'Its a Tabaxi!',
};

const seedRaces = () => Race.create(tabaxi);

module.exports = seedRaces;