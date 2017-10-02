let express = require('express');
let router = express.Router();

router.use('/animals', require('./animals'));
router.use('/cars', require('./cars'));


router.get('/', function (request, response) {
    response.render('default', {
        title: 'Home',
        users: ['selvesan', 'ray', 'james']
    });
});

router.get('/about', function (request, response) {
    response.send('Learn about us..');
});

router.get('*', function (req, res) {
    res.send('404 not found');
});

module.exports = router;