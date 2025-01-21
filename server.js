var express    = require('express')
var bodyParser = require('body-parser')
var mongoose = require('mongoose');
var app = express()

mongoose.connection.on('connected', () => console.log('connected'));

// Add Connect String Here
mongoose.connect("mongodb+srv://malbinson:malbinson@cluster1.cvp0r.mongodb.net/malbinson?retryWrites=true&w=majority&appName=Cluster1&useNewUrlParser=true")

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
