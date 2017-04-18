
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