let express = require('express');
let router = express.Router();

router.get('/brands', function (req, res) {
    res.send('Audi, BMW, Mercedes')
});

router.get('/models', function (req, res) {
    res.send('Audi Q7, BMW X5, Mercedes GL')
});

module.exports = router;