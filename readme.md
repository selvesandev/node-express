# Node with Express

By itself node is very tiny and requires something like express.
Express is going to give you the structure and methods you need to build a real website.
Express is a framework the provide a way of structuring your code and gives you additional capabilities.

* Give Node.js structure
* Templating language (jade,EJS)
* Routing Mechanism
* Access to an MVC Pattern.
    * Model - the Data
    * View  - the Template
    * Controller - the Javascript Logic 
    
    
## Install Express
`npm install -g express-generator`  
once this is complete we will be able to access the express cli command.
  
  
`npm install express --save` Install express as the dependency for your app/


## Hello world
app.js
```nodejs
let express = require('express');
let app = express();

app.get('/', function (request, response) {
    response.send('Hello Express');
});

let server = app.listen(3000, function () {
    console.log('listing to port 3000');
});
```