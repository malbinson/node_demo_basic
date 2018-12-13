module.exports = function(app) {

  //this is our Cat model
  var Cat = require('./cat')

  //home page: list al the cats
  app.get('/', function(req, res) {

    //find all the cats then render
    //catList passing it our found cats
    Cat.find({}, function(err, cats) {
      console.log(cats);
      res.render('catList.ejs',{cats:cats})
    });

  });

  //display (GET) the addCat page
  app.get('/addCat', function(req,res) {
    res.render("addCat.ejs")
  })

  //handle the submit (POST) on adding a cat
  app.post('/addCat', function(req,res) {

    //grab value from the submitted request object
    var catName = req.body.catName

    //create and save our cat, just like creating an object
    var newCat = new Cat({ name: catName });
    newCat.save(function (err) {

      console.log("saved: " + newCat.name)

      //finding cats again and rendering page
      Cat.find({}, function(err, cats) {
        console.log(cats);
        res.render('catList.ejs',{cats:cats})
      });

    })

  })

}
