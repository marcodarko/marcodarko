$("#Grindrmodal").iziModal();

$(document).on('click', '.Grindrtrigger', function (event) {
    event.preventDefault();
    $('#Grindrmodal').iziModal('open');
});

$('#gaymoji').mouseenter(function(){
	var h2= $('<h2 style="color: white">').html('Gaymoji');
	var button1= $('<buttom>').addClass('themeButton roll-in-left ').html("Illustrator");
	var button2= $('<buttom>').addClass('themeButton roll-in-left ').html("Photoshop");
	var button3= $('<buttom>').addClass('themeButton roll-in-left ').html("Adobe Draw");
	var div= $('<div>').append(h2).append(button1).append(button2).append(button3);
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
	var h2= $('<h2 style="color: white">').html('ARMSurfing');
	var button1= $('<buttom>').addClass('themeButton roll-in-left ').html("HTML 5");
	var button2= $('<buttom>').addClass('themeButton roll-in-left ').html("CSS 3");
	var button3= $('<buttom>').addClass('themeButton roll-in-left ').html("JS");
	var button4= $('<buttom>').addClass('themeButton roll-in-left ').html("JQuery");
	var button5= $('<buttom>').addClass('themeButton roll-in-left ').html("Web API");
	var button6= $('<buttom>').addClass('themeButton roll-in-left ').html("Firebase");

	var div= $('<div>').append(h2).append(button1).append(button2).append(button3).append(button4).append(button5).append(button6);
	$('#ARMSurfing').append(div);
});

$('#ARMSurfing').mouseleave(function(){
	$('#ARMSurfing').html(" ");
});



$("#burgermodal").iziModal();

$(document).on('click', '.burgertrigger', function (event) {
    event.preventDefault();
    $('#burgermodal').iziModal('open');
});

$('#burger').mouseenter(function(){

	var h2= $('<h2 style="color: white">').html('Eat-Da-Burger');
	var button1= $('<buttom>').addClass('themeButton roll-in-left ').html("HTML 5");
	var button2= $('<buttom>').addClass('themeButton roll-in-left ').html("CSS 3");
	var button3= $('<buttom>').addClass('themeButton roll-in-left ').html("JS");
	var button4= $('<buttom>').addClass('themeButton roll-in-left ').html("JQuery");
	var button5= $('<buttom>').addClass('themeButton roll-in-left ').html("Node JS");
	var button6= $('<buttom>').addClass('themeButton roll-in-left ').html("MySQL");

	var div= $('<div>').append(h2).append(button1).append(button2).append(button3).append(button4).append(button5).append(button6);
	$('#burger').append(div);
});

$('#burger').mouseleave(function(){
	$('#burger').html(" ");
});



$("#gitmemodal").iziModal();

$(document).on('click', '.gitmetrigger', function (event) {
    event.preventDefault();
    $('#gitmemodal').iziModal('open');
});

$('#gitme').mouseenter(function(){

	var h2= $('<h2 style="color: white">').html('GitMe');
	var button1= $('<buttom>').addClass('themeButton roll-in-left ').html("HTML5");
	var button2= $('<buttom>').addClass('themeButton roll-in-left ').html("CSS3");
	var button3= $('<buttom>').addClass('themeButton roll-in-left ').html("Passport");
	var button4= $('<buttom>').addClass('themeButton roll-in-left ').html("JQuery");
	var button5= $('<buttom>').addClass('themeButton roll-in-left ').html("Node");
	var button6= $('<buttom>').addClass('themeButton roll-in-left ').html("MySQL");
	var button7= $('<buttom>').addClass('themeButton roll-in-left ').html("Mocha");
	var button8= $('<buttom>').addClass('themeButton roll-in-left ').html("D3");
	var button9= $('<buttom>').addClass('themeButton roll-in-left ').html("AWS");
	var button10= $('<buttom>').addClass('themeButton roll-in-left ').html("Handlebars");


	var div= $('<div>').append(h2).append(button3).append(button4).append(button5).append(button6).append(button7).append(button8).append(button9).append(button10);
	$('#gitme').append(div);
});

$('#gitme').mouseleave(function(){
	$('#gitme').html(" ");
});






