const { Race } = require('../models');

const tabaxi = {
        name: 'tabaxi',
        info: 'Hailing from a strange and distant land, wandering tabaxi are catlike humanoids driven by curiosity to collect interesting artifacts, gather tales and stories, and lay eyes on all the world\'s wonders. Ultimate travelers, the inquisitive tabaxi rarely stay in one place for long. Their innate nature pushes them to leave no secrets uncovered, no treasures or legends lost.',
};

const seedRaces = () => Race.create(tabaxi);

module.exports = seedRaces;