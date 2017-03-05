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

class Badcrab{
  constructor (id, image) {
    this.id =  id;
    this.image = image;
    this.posX = 0;
    this.posY = 0;
  }

  moveCrab() {
    // this.posX += 10;
    //$(this.id).animate({})
    $(document).ready(function() {

        $(".badcrab-box").animate({left: "+=900"}, 10000);
    })
      // $(".badcrab-box").animate({left: "+=900"}, 10000);
  }
}

var badCrab= new Badcrab()
console.assert(badCrab instanceof Badcrab);

var playerSpaceCount = 0;

// console.assert(Badcrab.moveCrab = ())

// function game () {
//
//   function draw () {
//     $(player.id).position.x = player.positionX;
//     $(baddie.id).position.y = player.positionY;
//   }
//
//   var player = new Goodgrab()
//   var baddie = new Badcrab()
//
//   setInterval(function () {
//     if (Math.random > 0.5) {
//       baddie.moveCrab();
//     }
//     player.move(spaceCount);
//
//     draw();
//   }, 100);
// }
//
// game()

// console.assert(badcrab instanceof Badcrab);
// $(document).ready(function()
// };

$(".go").click(moveCrab)
function moveCrab() {

    $(".badcrab-box").animate({left: "+=900"}, 10000);
};

$(".music-player").click(function () {
  var sound = $(".music");
        sound.play()

});


// var badcrab = new Badcrab()
//
// console.assert(badcrab instanceof Badcrab);





// $(document).ready(function() {
//     $(".goodcrab-box").animate({left: "+=900"}, 10000);
// });


document.body.onkeyup = function(e){
    if(e.keyCode == 32){
      $(document).ready(function() {
          $(".goodcrab-box").animate({left: "+=100"});
      });
    }
}
// $(document).ready(function () {
//     $(document).keyup(function (key) {
//         // if (cond == true) {
//             switch (parseInt(key.which, 10)) {
//                 case 65://keypress 97
//                     $('#goodcrab-box').animate({
//                         left: '+=10'
//                     }, 10000);

//

var goodcrab =$(".goodcrab-box");
var badcrab =$(".badcrab-box");
var cookie = $(".cookie-box")
function collision(goodcrab, cookie) {
     var x1 = (goodcrab).offset().left;
     var y1 = (goodcrab).offset().top;
     var h1 = (goodcrab).outerHeight();
     var w1 = (goodcrab).outerWidth();
     var b1 = y1 + h1;
     var r1 = x1 + w1;
     var x2 = (cookie).offset().left;
     var y2 = (cookie).offset().top;
     var h2 = (cookie).outerHeight();
     var w2 = (cookie).outerWidth();
     var b2 = y2 + h2;
     var r2 = x2 + w2;

     if (b1 < y2 || y1 > b2 || r1 < x2 || x1 > r2) return false;
     return true;
   }
   window.setInterval(function() {
    $('.result1').text(collision(goodcrab, cookie));
}, );

function collision2(badcrab, cookie) {
     var x1 = (badcrab).offset().left;
     var y1 = (badcrab).offset().top;
     var h1 = (badcrab).outerHeight();
     var w1 = (badcrab).outerWidth();
     var b1 = y1 + h1;
     var r1 = x1 + w1;
     var x2 = (cookie).offset().left;
     var y2 = (cookie).offset().top;
     var h2 = (cookie).outerHeight();
     var w2 = (cookie).outerWidth();
     var b2 = y2 + h2;
     var r2 = x2 + w2;

     if (b1 < y2 || y1 > b2 || r1 < x2 || x1 > r2) return false;
     return true;
   }
   window.setInterval(function() {
    $('.result2').text(collision2(badcrab, cookie));
}, );
