const router = require('express').Router();
const path = require('path');

router.get('/', (req, res) => {
    try {
        res.sendFile(path.join(__dirname, '../views/landing.html'));
    } catch (err) {
        res.status(500).json(err);
    }
});

router.get('/login', (req, res) => {
    try {
        res.sendFile(path.join(__dirname, '../views/login.html'));
    } catch (err) {
        res.status(500).json(err);
    }
});

router.get('/newcharacter', (req, res) => {
    try {
        res.sendFile(path.join(__dirname, '../views/newcharacter.html'));
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;