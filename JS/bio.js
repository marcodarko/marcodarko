
$( ".spanIcon" ).hover(function(){


	$(this).addClass('jello-horizontal');

	var outText = $(this).data("out");
	var inText = $(this).data("in");

	var currentText = $(this).html().trim();

	if(currentText === inText ){
		$(this).html(outText);
	}else{
		$(this).html(inText);
	}

} );


$( ".icon" ).hover(function(){

	$(this).toggleClass('jello-horizontal');

});

// flicker text

setInterval(flickerText, 5000);

function flickerText(){

	$('.flicker').toggleClass('text-flicker-in-glow');

};




// changes bio image ever 3 secs
setInterval(changeImage, 3000);



function changeImage(){

	var chosen = Math.floor((Math.random() * 5) + 1);

	switch (chosen){
		case 1:
			$("#marco").attr("src", "../IMAGES/grindrPink.jpg");
		break;
		case 2:
			$("#marco").attr("src", "../IMAGES/grindrBlue.jpg");
		break;
		case 3:
			$("#marco").attr("src", "../IMAGES/grindrYellow.jpg");
		break;
		case 4:
			$("#marco").attr("src", "../IMAGES/grindrRed.jpg");
		break;
		case 5:
			$("#marco").attr("src", "../IMAGES/marcopic.jpg");
		break;
		
	}

	

};