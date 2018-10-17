const express = require('express');
const router = express.Router();
const config = require('config');
const Rss = require('./../models/rss.model');

router.get('/getrss', async (req, res) => {
    const rss = await Rss.find({}).limit(40);
    res.send(rss);
});

module.exports = router;
