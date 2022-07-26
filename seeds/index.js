const seedUsers = require('./user-seeds');
const seedRaces = require('./race-seeds');
const seedThings = require('./thing-seeds');
const seedRaceThings = require('./racething-seeds');

/* const seedCharacters = require('./character-seeds'); */

const sequelize = require('../config/connection');

const seedAll = async () => {
    await sequelize.sync({ force: true });
    console.log('\n----- DATABASE SYNCED -----\n');

    await seedUsers();
    console.log('\n----- USERS SYNCED -----\n');

    await seedRaces();
    console.log('\n----- RACES SYNCED -----\n');

    await seedThings();
    console.log('\n----- THINGS SYNCED -----\n');

    await seedRaceThings();
    console.log('\n----- RACE-THING-RELATIONSHIPS SYNCED -----\n');

    /* await seedCharacters();
    console.log('\n----- CHARACTERS SYNCED -----\n'); */

    console.log('\n----- DATABASE SEEDED SUCCESFULLY -----\n');

    process.exit(0);
};

seedAll();