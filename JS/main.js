      


    	$('#catSVG').hover(function(){

        var myVivus = new Vivus('catSVG');
      
		    myVivus.play();

      });



      $('#personSVG').hover(function(){

        var myVivus = new Vivus('personSVG');
      
        myVivus.play();

      });



      $('#iconSVG').hover(function(){

        var myVivus = new Vivus('iconSVG');
      
        myVivus.play();

      });
	



// 3D TEXT

jQuery(document).ready(function(){
   $('.titleText').mousemove(function(e){
     var rXP = (e.pageX - this.offsetLeft-$(this).width()/2);
     var rYP = (e.pageY - this.offsetTop-$(this).height()/2);
     $('.titleText').css('text-shadow', +rYP/10+'px '+rXP/80+'px rgba(227,6,19,.8), '+rYP/8+'px '+rXP/60+'px rgba(255,237,0,1), '+rXP/70+'px '+rYP/12+'px rgba(0,159,227,.7)');
   });
});


// setInterval(function(){

// 	var random=Math.random();

//   if(random <= .1){
// 	$('#hero').css({'background-image':'url(IMAGES/static.gif)', 'background-size': 'cover'});
//   $(".text-js").toggleClass('text-flicker-in-glow');
//   }else{
//       $('#hero').css({'background-image': 'none', 'background-color':'black'})
//   }

// }, 400);


function autoType(elementClass, typingSpeed){
  var thhis = $(elementClass);
  thhis.css({
    "position": "relative",
    "display": "inline-block"
  });
  thhis.prepend('<div class="cursor" style="right: initial; left:0;"></div>');
  thhis = thhis.find(".text-js");
  var text = thhis.text().trim().split('');
  var amntOfChars = text.length;
  var newString = "";
  thhis.text("|");
  setTimeout(function(){
    thhis.css("opacity",1);
    thhis.prev().removeAttr("style");
    thhis.text("");
    for(var i = 0; i < amntOfChars; i++){
      (function(i,char){
        setTimeout(function() {        
          newString += char;
          thhis.text(newString);
        },i*typingSpeed);
      })(i+1,text[i]);
    }
  },1500);
}

$(document).ready(function(){
  // Now to start autoTyping just call the autoType function with the 
  // class of outer div
  // The second paramter is the speed between each letter is typed.   
  autoType(".type-js",110);

  
});



$("#CATmodal").iziModal();

$(document).on('click', '#catSVG', function (event) {

    event.preventDefault();

    $('#CATmodal').iziModal('open');

});

$("#PERSONmodal").iziModal();

$(document).on('click', '#personSVG', function (event) {

    event.preventDefault();

    $('#PERSONmodal').iziModal('open');

});

$("#ICONmodal").iziModal();

$(document).on('click', '#iconSVG', function (event) {

    event.preventDefault();

    $('#ICONmodal').iziModal('open');

});


