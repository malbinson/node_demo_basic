var express    = require('express')
var bodyParser = require('body-parser')
var mongoose = require('mongoose');
const dotenv = require('dotenv');
var app = express()

//set up vars
app.set('view engine','ejs');
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: false }));

//link to data model and routes
var Cat = require('./cat')
require('./routes')(app);

dotenv.config();
mongoose.connection.on('connected', () => console.log('connected'));
mongoose.connect(process.env.CONNECT_STRING)

app.listen(3000, () => {
    console.log('meow')
})
