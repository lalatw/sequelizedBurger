var db = require("../models");

module.exports = function(app) {

  // GET route for getting all burgers
  app.get("/", function(req, res) {
    // findAll returns all entries for burgers
    db.Burgers.findAll({}).then(function(dbBurgers) {
        var hbsObject = {
            Burgers: dbBurgers
        };
        res.render('index', hbsObject);
    });
  });

};


