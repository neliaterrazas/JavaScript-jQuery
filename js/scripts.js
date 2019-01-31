$(document).ready(function() {

  $("form#survey").submit(function(event) {

    event.preventDefault();

    var num = parseInt($("#number").val());



    $("#results").show();

    // write if statements to decide which result the user sees
    if(num >=1 && num <=3) {
      $("#results").text("Java/Andriod");
    } else if(num <= 6) {
      $("#results").text("Ruby/Rails");
    } else {
      $("#results").text("CSS/Design");
    }

    });
  });
