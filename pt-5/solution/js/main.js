$(function() {
    var inputs = $('.form-input');


    $('#submit-button').on('click', clear);

    function check() {
        for (var i = 0; i < inputs.length; i++) {
            if (!inputs[i].value) {
                $(inputs[i]).addClass('error');
                $(inputs[i]).siblings().show();
            }
        }
    }

    function clear(event) {
        event.preventDefault();
        for (var i = 0; i < inputs.length; i++) {
            $(inputs[i]).removeClass('error');
            $('.reject').hide();
            check();
        }
    }
});
