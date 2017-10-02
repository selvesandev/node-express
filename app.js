let express = require('express');
let app = express();

app.set('view engine', 'ejs');

app.get('/', function (request, response) {
    response.render('default', {
        title: 'Home',
        users: ['selvesan', 'ray', 'james']
    });
});

let server = app.listen(3000, function () {
    console.log('listing to port 3000');
});