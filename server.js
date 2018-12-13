// Dependencies
require("dotenv").config();
var express = require("express");
var exphbs = require("express-handlebars");
var path = require("path");
var db = require("./models");

var app = express();
var PORT = process.env.PORT || 3000;

// Middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static("public"));

// Routes
require("./routes/htmlRoutes.js")(app);
require("./routes/author-api-routes.js")(app);
require("./routes/post-api-routes.js")(app);
require("./routes/comment-api-routes.js")(app);

// Handlebars
app.engine("handlebars", exphbs({defaultLayout: "main"}));
app.set("view engine", "handlebars");

app.get('/', function (req, res) {
  res.render('index');
});

var syncOptions = { force: false };

// If running a test, set syncOptions.force to true
// clearing the `testdb`
if (process.env.NODE_ENV === "test") {
  syncOptions.force = true;
}

// const sequelize = new Sequelize('messageBoard', 'root', '', {
//   dialect: 'mysql',
//   host: 'localhost',
//   port: 3000,
// })

// Syncing our sequelize models and then starting our Express app
db.sequelize.sync(syncOptions).then(function() {
  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
});

//app.listen(PORT);
module.exports = app;

