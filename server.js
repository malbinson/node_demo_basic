var express    = require('express')
var bodyParser = require('body-parser')
var mongoose = require('mongoose');
var app = express()

// Connect to DB
mongoose.connect(ADD_CONNECT_STRING_HERE)

//set up vars
app.set('view engine','ejs');
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: false }));

//link to data model and routes
var Cat = require('./cat')
require('./routes')(app);

app.listen(3000, () => {
    console.log('meow')
})
