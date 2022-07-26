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
        name: 'Darkvision-Tabaxi',
        type: 'proficiency',
        info: 'You have a cat\'s keen senses, especially in the dark. You can see in dim light within 60 feet of you as if it were bright light, and in darkness as if it were dim light. You can\'t discern color in darkness, only shades of gray.',
        proficiency_type: 'vision',
        proficiency: 'Darkvision',
    },
    {
        name: 'Feline Agility',
        type: 'trait',
        info: 'Your reflexes and agility allow you to move with a burst of speed. When you move on your turn in combat, you can double your speed until the end of the turn. Once you use this trait, you can\'t use it again until you move 0 feet on one of your turns.',
    },
    {
        name: 'Cat\'s Claws',
        type: 'trait',
        info: 'Because of your claws, you have a climbing speed of 20 feet. In addition, your claws are natural weapons, which you can use to make unarmed strikes. If you hit with them, you deal slashing damage equal to 1d4 + your Strength modifier, instead of the bludgeoning damage normal for an unarmed strike.',
    },
    {
        name: 'Perception Proficiency',
        type: 'proficiency',
        info: 'You are proficient in the perception skill.',
        proficiency_type: 'skill',
        proficiency: 'perception',
    },
    {
        name: 'Stealth Proficiency',
        type: 'proficiency',
        info: 'You are proficient in the stealth skill.',
        proficiency_type: 'skill',
        proficiency: 'stealth',
    },
];

const seedThings = () => Thing.bulkCreate(thingSeeds);

module.exports = seedThings;