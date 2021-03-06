// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================

// Requiring our models
var db = require("../models");

// Routes
// =============================================================
module.exports = function(app) {

  // GET route for getting all of the posts/comments
  app.get("/api/comment", function(req, res) {
    var query = {};
    if (req.query.post_id) {
      query.Postid = req.query.post_id;
    }
    // Here we add an "include" property to our options in our findAll query
    // We set the value to an array of the models we want to include in a left outer join
    // In this case, just db.Author
    db.Comment.findAll({
      where: query,
      include: [db.Post]
    }).then(function(dbComment) {
      res.json(dbComment);
    });
  });

  // Get route for retrieving a single post/comment
  app.get("/api/comment/:id", function(req, res) {
    // Here we add an "include" property to our options in our findOne query
    // We set the value to an array of the models we want to include in a left outer join
    // In this case, just db.Author
    db.Comment.findOne({
      where: {
        id: req.params.id
      },
      include: [db.Post]
    }).then(function(dbComment) {
      res.json(dbComment);
    });
  });

  // POST route for saving a new post/comment
  app.post("/api/comment", function(req, res) {
    //console.log("...................................................route reg body")
    db.Comment.create(req.body).then(function(dbComment) {
      res.json(dbComment);
    });
  });

  // DELETE route for deleting posts/comment
  app.delete("/api/comment/:id", function(req, res) {
    db.Comment.destroy({
      where: {
        id: req.params.id
      }
    }).then(function(dbComment) {
      res.json(dbComment);
    });
  });

  // PUT route for updating posts
  app.put("/api/comment", function(req, res) {
    db.Comment.update(
      req.body,
      {
        where: {
          id: req.body.id
        }
      }).then(function(dbComment) {
      res.json(dbComment);
    });
  });
};
