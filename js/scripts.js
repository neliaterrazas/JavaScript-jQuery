//The only variable that will determine the output is selecting a number from 1-9.

$(document).ready(function() {
  var number = parseInt($("#number").val());

//User Interface Logic
  $("form#survey").submit(function(event) {
    if(number <=3) {
      return ;
    }if else(number<=6) {
      return ;
    }else {
      return ;

    }


  });
    $("results").text(number);
});
