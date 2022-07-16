const { User } = require('../models');

const userData = [
    {
        username: 'testuser',
        password: 'testuser',
    },
    {
        username: 'testuser2',
        password: 'testuser2',
    },
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;