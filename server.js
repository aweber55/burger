var express = require("express");
var bodyParser = require("body-parser");
var methodOverride = require("method-override");



var app = express();

var exphbs = require("express-handlebars");
app.use(express.static(process.cwd() + "/public"));

app.use(bodyParser.urlencoded({ extended: false }));

app.use(methodOverride("_method"));

var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

var routes = require("./controllers/burgers_controller.js");

app.use("/", routes);




var port = process.env.port || 3000;
app.listen(port, function() {
    // Log (server-side) when our server has started
    console.log("Server listening on: http://localhost:" + port);
  });
  