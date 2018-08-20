var express = require("express");

var router = express.Router();

var burger = require("../models/burger.js");
router.get('/', function(req,res) {
    res.redirect('/index');
});

router.get('/index', function (req, res) {
  burger.selectAll(function (data) {
      var hbsObject = {
          burgers: data
      };
      res.render('index', hbsObject);
  });
});

router.post('/api/new', function (req, res) {
  
      burger.insertOne([req.body.burger_name], function (data) {
          res.redirect("/index");
      });
  
});
router.post('/api/devoured', function(req, res) {
  
  burger.updateOne(req.params.id, function(data){
      res.json(200);
  });
});

  module.exports = router;
  

  