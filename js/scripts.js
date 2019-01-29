
$(document).ready(function() {

  $("form#survey").submit(function(event) {

  var number = parseInt($("select#number").val());


  if(number <=3) {
    result = ;
  }else if (number<=6 || number>3) {
    result =;
  }else {
    result = ;
  }


  $("#results").text(number);
    event.preventDefault();
  };
});
});
