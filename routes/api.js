const express = require('express');
const router = express.Router();

const handler = (req, res) => {
    res.send({ messag: 'hi!!'});
}

router.get('/', handler);

module.exports = router;
