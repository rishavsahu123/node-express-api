var express = require('express');
var app = express();
var todoController = require('./controller/todoController')

//use ejs for view part integration(Embedded JavaScript templating)
app.set('view engine', 'ejs');

//use controller for api integration
app.use(express.static('./public'));

//calling controller, we can call here but do it saperate for better understanding
todoController(app)

//set server port number for unique indentification.
app.listen(3000);
console.log('listening port 3000')