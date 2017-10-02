let express = require('express');
let app = express();


app.set('view engine', 'ejs');
app.use(require('./routes'));

let server = app.listen(3000, function () {
    console.log('listing to port 3000');
});