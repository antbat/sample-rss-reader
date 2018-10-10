const express = require('express');
const router = express.Router();
const RSS = require('./../models/rss.model');

const handler = async (req, res) => {
    const rss = RSS.find({});
    res.send(rss);
}

router.get('/', handler);

module.exports = router;
