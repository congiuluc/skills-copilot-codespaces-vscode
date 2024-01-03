// Create web server
// Create web server
var express = require("express");
var app = express();
var bodyParser = require("body-parser");

// Create router object
var router = express.Router();

// Tell express to use body-parser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Register router
app.use(router);

// Create route for home page
router.get("/", function(req, res) {
  res.send("Home page");
});

// Create route for about page
router.get("/about", function(req, res) {
  res.send("About page");
});

// Create route for contact page
router.get("/contact", function(req, res) {
  res.send("Contact page");
});

// Create route for comment page
router.get("/comment", function(req, res) {
  res.send("Comment page");
});

// Create route to handle post request
router.post("/comment", function(req, res) {
  var name = req.body.name;
  var message = req.body.message;
  console.log(name + " : " + message);
  res.send("Post page");
});

// Create route for dynamic route
router.get("/hello/:name", function(req, res) {
  res.send("Hello " + req.params.name);
});

// Create route for dynamic route
router.get("/hello/:name/:age", function(req, res) {
  res.send("Hello " + req.params.name + " you are " + req.params.age + " years old");
});

// Create route for dynamic route
router.get("/hello/:name/:age", function(req, res) {
  res.send("Hello " + req.params.name + " you are " + req.params.age + " years old");
});

// Create route for dynamic route with optional parameter
router.get("/hello/:name/:age?", function(req, res) {
  if (req.params.age) {
    res.send("Hello " + req.params.name + " you are " + req.params.age + " years old");
  } else {
    res.send("Hello " + req.params.name);
  }
});

// Create route for dynamic route with optional parameter
router.get("/hello/:name/:age?", function(req, res) {
  if (req.params.age) {
    res.send("Hello " + req.params.name + " you are " + req.params.age + " years old");
  } else {
    res.send("Hello " + req.params.name);
  }
});

//