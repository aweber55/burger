var express = require("express");
var burger = require("../models/burger.js");
var router = express.Router();




router.get('/', function (req, res) {
  burger.selectAll(function (data) {
      var handlebarsObj = {
          burgers: data
      };
      res.render('index', handlebarsObj);
  });
});

router.post('/api/new', function (req, res) {
  var name = req.body.burger_name
  if (name) {
      burger.create(name, function (data) {
          res.redirect("/");
      });
  };
});
router.post('/api/devoured', function(req, res) {
  let id = req.body.id;
  burger.update(id, function(data){
      res.json(200);
  });
});

  module.exports = router;
  

  