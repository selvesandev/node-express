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

## Routes
```nodejs
app.get('/home/:name?/:title?', function (request, response) {
    let name=request.params.name;
    response.send('Home page '+name);
});

app.get('/*', function (request, response) {
    response.send('Bad Route');
});

```

## Templates
Express comes with two options for templating.
* Jade (indentation)
* EJS (embeddable javascript)

`npm install ejs --save`  

./app.js
```node js
app.set('view engine', 'ejs');

app.get('/', function (request, response) {
    response.render('default', {
        title: 'Home',
        users: ['selvesan', 'ray', 'james']
    });
});

```
./views/default.ejs
```html
<h1><%= title %></h1>

<ul>
    <% for(var i = 0;i < users.length;i++){ %>
    <li>
        <%= users[i] %>
    </li>
    <% } %>
</ul>

```
    

If your templates are not on `views` folder
```
app.set('views',__dirname+'/folder_name');
__dirname is a global variable that displays the name of the current foler where the app.js file is.
```

#### Partials
Dividing the common contents on the page like header and foooter into separate file. 

```node js
    <% include partials/page/head.ejs %>

```

#### Locals and Conditional
```nodejs
    app.set.pagetitle="Awesome website."
    //now this variable will be available locally to every single page.    
    
        <%
        if(typeof users == undefined){
        %>
    
```

### Routes

```nodejs

routes/
  cars.js
  index.js
  
```
animals.js
```nodejs
var express = require('express')
  , router = express.Router()

// Domestic animals page
router.get('/domestic', function(req, res) {
  res.send('Cow, Horse, Sheep')
})

module.exports = router

```

app.js
```nodejs

router.use('/animals', require('./animals'))

```

Available Routes

* /
* /animals/domestic


## Express Generator
Create a complete project boilerplate with express-generator.  
`express -e project_name`  
`cd project_name`  
`npm install`  
`npm start`