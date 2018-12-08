//NOT USING THIS PAGE, WILL CLEAN UP

// Get references to page elements
var $commentBody = $("#example-text");
var $exampleDescription = $("#commentorName");
var $submitBtn = $("#commentSubmit");
var $exampleList = $("#example_list");

// The API object contains methods for each kind of request we'll make
var API = {
  saveComment: function(example) {
    return $.ajax({
      headers: {
        "Content-Type": "application/json"
      },
      type: "POST",
      url: "/api/comment",
      data: JSON.stringify(example)
    });
  },
  getComment: function() {
    return $.ajax({
      url: "/api/comment",
      type: "GET"
    });
  },
  deleteComment: function(id) {
    return $.ajax({
      url: "/api/comment" + id,
      type: "DELETE"
    });
  }
};

// refreshComment gets new examples from the db and repopulates the list
var refreshComment = function() {
  API.getComment().then(function(data) {
    var $examples = data.map(function(example) {
      var $a = $("<a>")
        .text(example.text)
        .attr("href", "/example/" + example.id);

      var $li = $("<li>")
        .attr({
          class: "list-group-item",
          "data-id": example.id
        })
        .append($a);

      var $button = $("<button>")
        .addClass("btn btn-danger float-right delete")
        .text("ｘ");

      $li.append($button);

      return $li;
    });

    $exampleList.empty();
    $exampleList.append($examples);
  });
};

// handleFormSubmit is called whenever we submit a new example
// Save the new example to the db and refresh the list
var handleFormSubmit = function(event) {
  event.preventDefault();
  ///console.log("jslfjdlajfljdalfjldas");

  var example = {
    text: $commentBody.val().trim(),
    author: $exampleDescription.val().trim()
  };

  if (!(example.text && example.author)) {
    alert("You must enter an example text and description!");
    return;
  }

  API.saveComment(example).then(function() {
    refreshComment();
  });

  $commentbody.val("");
  $exampleDescription.val("");
};

// handleDeleteBtnClick is called when an example's delete button is clicked
// Remove the example from the db and refresh the list
var handleDeleteBtnClick = function() {
  var idToDelete = $(this)
    .parent()
    .attr("data-id");

  API.deleteComment(idToDelete).then(function() {
    refreshComment();
  });
};

// Add event listeners to the submit and delete buttons
$submitBtn.on("click", handleFormSubmit);
//$exampleList.on("click", ".delete", handleDeleteBtnClick);
