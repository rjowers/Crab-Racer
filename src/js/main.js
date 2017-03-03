import $ from 'jquery';


// $(document).ready(function(e) {
//     width = "+=" + $(document).width();
//     $(".bad-crab").animate({
//     left: width
//   }, 5000, function() {
//     // Animation complete.
//   });
// });

// $( ".go" ).click(function() {
//   $( ".bad-crab" ).animate({
//     left: 100
//   }, {
//     duration: 1000,
//
//   });
// });

$(document).ready(function() {
    $(".badcrab-box").animate({left: "+=900"}, 10000);
});
