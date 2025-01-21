module.exports = function(app) {

  //this is our Cat model
  var Cat = require('./cat')

  //home page: list al the cats
  app.get('/', async function(req, res) {
    const cats = await Cat.find({});
    res.render('catList.ejs',{cats:cats})
  });

  app.get('/catDetail/:id', async function(req,res){
    const cat = await Cat.findOne({_id:req.params.id})
    res.render('catDetail.ejs',{cat:cat})
  });

  //display (GET) the addCat page
  app.get('/addCat', function(req,res) {
    res.render("addCat.ejs")
  })

  app.post('/deleteCat', async (req,res) => {
    await Cat.deleteOne({ _id: req.body.id });
    res.redirect("/")
  })

  app.get('/updateCat/:id', async function(req,res){
    const cat = await Cat.findOne({_id:req.params.id})
    res.render('updateCat.ejs',{cat:cat})
  });

  app.post('/updateCat', async (req,res) => {
    await Cat.findByIdAndUpdate(req.body.id, { name: req.body.catName });
    res.redirect("/")
  })

  //handle the submit (POST) on adding a cat
  app.post('/addCat', function(req,res) {

    //grab value from the submitted request object
    var catName = req.body.catName

    //create and save our cat, just like creating an object
    var newCat = new Cat({ name: catName });
    newCat.save(async function (err) {

      const cats = await Cat.find({});

      res.render('catList.ejs',{cats:cats})

    })

  })

}
