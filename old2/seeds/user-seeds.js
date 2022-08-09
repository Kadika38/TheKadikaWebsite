const { User } = require('../models');

const testUser = {
        username: 'testuser',
        password: 'testuser',
};

const seedUsers = () => User.create(testUser);

module.exports = seedUsers;