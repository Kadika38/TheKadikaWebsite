const { Thing } = require('../models');

const thingSeeds = [
    {
        name: 'Dex +2',
        type: 'stat bonus',
        info: 'Add 2 to Dexterity stat',
        stat_bonus_type: 'dex',
        stat_bonus: 2,
    },
    {
        name: 'Cha +1',
        type: 'stat bonus',
        info: 'Add 1 to Charisma stat',
        stat_bonus_type: 'cha',
        stat_bonus: 1,
    },
    {
        name: 'size-Tabaxi',
        type: 'other stat',
        info: 'Tabaxi are taller on average than humans and relatively slender.',
        other_stat: 'size',
        size: 'Medium',
    },
    {
        name: 'speed',
        type: 'other stat',
        info: 'Ability to move 30 ft on a turn',
        other_stat: 'speed',
        speed: 30,
    },
    {
        name: 'climb',
        type: 'other stat',
        info: 'Ability to climb 20 ft on a turn',
        other_stat: 'climb',
        climb: 20,
    },
    {
        name: 'age-Tabaxi',
        type: 'info',
        info: 'Tabaxi have lifespans equivalent to humans.',
    },
    {
        name: 'Darkvision-Tabaxi'
    }
];

const seedThings = () => Thing.bulkCreate(thingSeeds);

module.exports = seedThings;