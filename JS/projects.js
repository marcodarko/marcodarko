$("#Grindrmodal").iziModal();

$(document).on('click', '.Grindrtrigger', function (event) {
    event.preventDefault();
    $('#Grindrmodal').iziModal('open');
});

$('#gaymoji').mouseenter(function(){

	var button1= $('<buttom>').addClass('themeButton roll-in-left ').html("Illustrator");
	var button2= $('<buttom>').addClass('themeButton roll-in-left ').html("Photoshop");
	var button3= $('<buttom>').addClass('themeButton roll-in-left ').html("Adobe Draw");
	var div= $('<div>').append(button1).append(button2).append(button3);
	$('#gaymoji').append(div);
});

$('#gaymoji').mouseleave(function(){
	$('#gaymoji').html(" ");
});



$("#ARMSmodal").iziModal();

$(document).on('click', '.ARMStrigger', function (event) {
    event.preventDefault();
    $('#ARMSmodal').iziModal('open');
});

$('#ARMSurfing').mouseenter(function(){

	var button1= $('<buttom>').addClass('themeButton roll-in-left ').html("HTML 5");
	var button2= $('<buttom>').addClass('themeButton roll-in-left ').html("CSS 3");
	var button3= $('<buttom>').addClass('themeButton roll-in-left ').html("JS");
	var button4= $('<buttom>').addClass('themeButton roll-in-left ').html("JQuery");
	var button5= $('<buttom>').addClass('themeButton roll-in-left ').html("Web API");
	var button6= $('<buttom>').addClass('themeButton roll-in-left ').html("Firebase");

	var div= $('<div>').append(button1).append(button2).append(button3).append(button4).append(button5).append(button6);
	$('#ARMSurfing').append(div);
});

$('#ARMSurfing').mouseleave(function(){
	$('#ARMSurfing').html(" ");
});

