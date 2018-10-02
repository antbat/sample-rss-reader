const express = require('express');
const router = express.Router();
const config = require('config');

/* GET home page. */
router.get('/', (req, res) => {
    res.render('index', {
        title: 'RSS - reader' ,
        version: config.version
    });
});

module.exports = router;
