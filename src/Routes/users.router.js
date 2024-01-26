const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    const { limit, offset } = req.query;
    if(!limit && !offset)
        res.send('no params');
    else{
        res.json({
            limit,
            offset
        });
    }
});

module.exports = router;
