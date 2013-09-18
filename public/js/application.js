$(document).ready(function () {

  $('form').submit(function(event){
    event.preventDefault();

    var randomNum = Math.floor(Math.random() * 6) + 1;
    // console.log(randomNum);
   $.post("/rolls", {value: randomNum}, function(response){
    // console.log(response);
    $('.container').remove();
    $('body').append(response);
   });
  });
});

// PSEUDO-CODE:
  //  
  //   3- generate a random number between 1 and 6 using JavaScript
  //   4- use jQuery to submit an AJAX post to the form's action
  //   5- when the AJAX post is done, replace the contents of the "#die" DIV in the DOM using jQuery
