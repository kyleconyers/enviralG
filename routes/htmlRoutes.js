// *********************************************************************************
// html-routes.js - this file offers a set of routes for sending users to the various html pages
// *********************************************************************************

// Dependencies
// =============================================================
var path = require("path");

// Routes
// =============================================================
module.exports = function(app) {

  // Each of the below routes just handles the HTML page that the user gets sent to.

  // Root route loads index.html
  app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../index.html"));
  });

  // This route loads cms.html
  app.get("/cms", function(req, res) {
    res.sendFile(path.join(__dirname, "./cms.html"));
  });

  // This route loads blog.html
  app.get("/blog", function(req, res) {
    res.sendFile(path.join(__dirname, "./blog.html"));
  });

  // This route loads comment.html
  app.get("/comment", function(req, res) {
    res.sendFile(path.join(__dirname, "./comment.html"));
  });

  // This route loads author-manager.html
  app.get("/authors", function(req, res) {
    res.sendFile(path.join(__dirname, "./author-manager.html"));
  });

};
