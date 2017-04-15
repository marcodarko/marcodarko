$("#Grindrmodal").iziModal();

$(document).on('click', '.Grindrtrigger', function (event) {

    event.preventDefault();

    $('#Grindrmodal').iziModal('open');

});