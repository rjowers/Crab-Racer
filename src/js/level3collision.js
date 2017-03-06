import $ from 'jquery'
var goodcrab =$(".goodcrab-box");
var badcrab =$(".badcrab-box");
var cookie = $(".cookie-box");
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

     if (b1 < y2 || y1 > b2 || r1 < x2 || x1 > r2) return;
     return "You Win!";
   }
   window.setInterval(function() {
    $('.result1').text(collision(goodcrab, cookie));
    if (collision(goodcrab, cookie)) {
      $('.badcrab-box').hide()
    }
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

     if (b1 < y2 || y1 > b2 || r1 < x2 || x1 > r2) return;
     return "You Lose! Play Again?";
   }
   window.setInterval(function() {
    $('.result2').text(collision2(badcrab, cookie));
    if (collision2(badcrab, cookie)) {
      $('.goodcrab-box').hide()
    }
},);

export{collision2}
export {collision}
