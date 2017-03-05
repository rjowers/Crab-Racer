import $ from 'jquery'
import { collision } from './collision.js';
import { collision2 } from './collision.js';



class Goodcrab{
  constructor (id2, otherid2) {
    this.id2 =  id2;
    this.goclass2 = goclass2;

  }
}
document.body.onkeyup = function movecrab(e){
    if(e.keyCode == 32){
      $(document).ready(function() {
          $(".goodcrab-box").animate({left: "+=10"});
          if (collision2(badcrab, cookie)) {
            $(".goodcrab-box").stop();
          }
        if (collision(goodcrab, cookie)) {
            $(".goodcrab-box").stop();
          }
      });
    }
}
//
//
// //     Goodcrab.prototype.move = document.body.onkeyup = function(e){
// //       if(e.keyCode == 32){
// //         $(document).ready(function() {
// //             $(".goodcrab-box").animate({left: "+=50"});
// //             if (collision2(badcrab, cookie)) {
// //               $(".goodcrab-box").stop();
// //             }
// //           if (collision(goodcrab, cookie)) {
// //               $(".goodcrab-box").stop();
// //             }
// //         });
// //       }
// //   }
// //
// // };
//
//
//
//
  export { Goodcrab };
