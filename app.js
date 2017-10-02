let express = require('express');
let app = express();

app.get('/', function (request, response) {
    response.send('Hello Express');
});

let server = app.listen(3000, function () {
    console.log('listing to port 3000');
});