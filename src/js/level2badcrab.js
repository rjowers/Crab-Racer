import $ from 'jquery'
class Badcrab{
  constructor (id, otherid) {
      this.id =  id;
      this.goclass = goclass;

    }
  }


  Badcrab.prototype.move =  $(".go").one("click", function moveCrab() {

      $(".badcrab-box").animate({left: "+=900"}, 10000);

  });



export { Badcrab };
