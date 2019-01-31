$(document).ready(function() {
  // when they submit form, get input from user
  $("#age").submit(function(event) {

    // save info in variables

    var num = parseInt($("#number").val());
    event.preventDefault();
    console.log();

    // write if statements to decide which result the user sees
    if(num >=1 && num <=3) {
      console.log(" ");
      // $('#result').text("Java/Andriod");
      $('#java-android').show();
      $('#ruby-rails').hide();
      $('#css-design').hide();
    } else if(num <= 6) {
      $('#java-android').hide();
      $('#ruby-rails').show();
      $('#css-design').hide();
    } else {
      $('#java-android').hide();
      $('#ruby-rails').hide();
      $('#css-design').show();
    }
    $('.result').text(num);  
  });
});
