// import models
const User = require('./User');
const Character = require('./Character');
const Choice = require('./Choice');
const Feat = require('./Feat');
const Option = require('./Option');
const Race = require('./Race');
const Thing = require('./Thing');
const RaceThing = require('./RaceThing');

// Characters belong to ONE User
Character.belongsTo(User, {
    foreignKey: 'user_id',
});

// Users have many Characters
User.hasMany(Character, {
    foreignKey: 'user_id',
});

// Choices belong to ONE Race
Choice.belongsTo(Race, {
    foreignKey: 'race_id',
});

// Races have many Choices
Race.hasMany(Choice, {
    foreignKey: 'race_id',
});

Thing.belongsToMany(Race, {
    through: RaceThing,
});

Race.hasMany(Thing, {
    through: RaceThing,
});

// Choices belong to ONE Class
/* Choice.belongsTo(Class, {
    foreignKey: '',
}); */

// Classes have many Choices
/* Class.hasMany(Choice, {
    foreignKey: '',
}); */

// Choices belong to ONE Feat
Choice.belongsTo(Feat, {
    foreignKey: 'feat_id',
});

// Feats have many Choices
Feat.hasMany(Choice, {
    foreignKey: 'feat_id',
});

// Options belong to ONE Choice
Option.belongsTo(Choice, {
    foreignKey: 'choice_id',
});

// Choices have many Options
Choice.hasMany(Option, {
    foreignKey: 'choice_id',
});

// Options belong to ONE Thing
Option.belongsTo(Thing, {
    foreignKey: 'thing_id',
});

// Things have many Options
Thing.hasMany(Option, {
    foreignKey: 'thing_id',
});

// Feats belong to ONE Thing
Feat.belongsTo(Thing, {
    foreignKey: 'feat_id',
});

// Things have ONE Feat
Thing.hasOne(Feat, {
    foreignKey: 'feat_id',
});

// Things belong to ONE Feat
Thing.belongsTo(Feat, {
    foreignKey: 'feat_id',
});

// Feats have ONE Thing
Feat.hasOne(Thing, {
    foreignKey: 'feat_id',
});


module.exports = {
    User,
    Character,
    Choice,
    Feat,
    Option,
    Race,
    Thing,
};