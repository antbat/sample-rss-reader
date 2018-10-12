const express = require('express');
const router = express.Router();
const config = require('config');

router.get('/getrss', (req, res) => {
    res.send([{
        title:'hello'
    }]);
});

module.exports = router;
