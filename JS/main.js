$("#Grindrmodal").iziModal();

$(document).on('click', '.Grindrtrigger', function (event) {

    event.preventDefault();

    $('#Grindrmodal').iziModal('open');

});



$("#ARMSmodal").iziModal();

$(document).on('click', '.ARMStrigger', function (event) {

    event.preventDefault();

    $('#ARMSmodal').iziModal('open');

});


// PROFECIENCIES ANIMATIONS

$("#profButton").on("click", function(event){
	event.preventDefault();

	$( "#html5" ).animate({width: "100%"}, 1000);
	
})