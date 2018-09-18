var db = require("../models");

module.exports = function(app) {


  // api GET route for getting all burgers
  app.get("/api/burgers", function(req, res) {
    // findAll returns all entries for burgers
    db.Burgers.findAll({}).then(function(dbBurgers) {
        var hbsObject = {
            Burgers: dbBurgers
        };
        res.json(hbsObject);
        res.json(dbBurgers);
    });
  });

  // api POST route for saving a new burger
  app.post("/api/burgers", function(req, res) {
    db.Burgers.create({
      burgerName: req.body,
    }).then(function(dbBurgers) {
      res.json(dbBurgers);
    });
  });


  // api PUT route for updating devoured boolean status.
  app.put("/api/burgers/:id", function(req, res) {
    db.Burgers.update({
        devoured: req.body.devoured
    }, {
      where: {
        id: req.params.id
      }
    }).then(function(dbBurgers) {
      res.json(dbBurgers);
    });
  });

};


  
