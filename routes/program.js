var express = require('express');
var router = express.Router();

/* GET program page. */
router.get('/program', function(req, res, next) {
    res.render('program');
});

module.exports = router;