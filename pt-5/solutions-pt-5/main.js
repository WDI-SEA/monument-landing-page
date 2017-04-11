$(document).ready(function() {
    $('#form-name').on('input', function() {
        var input = $(this);
        var isName = input.val();
        if (isName) {
            input.removeClass('invalid').addClass('valid');
        } else {
            input.removeClass('valid').addClass('invalid');
        }
    });

    $('#form-email').on('input', function() {
        var input = $(this);
        var re = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
        var isEmail = re.test(input.val());
        if (isEmail) {
            input.removeClass('invalid').addClass('valid');
        } else {
            input.removeClass('valid').addClass('invalid');
        }
    });

    $('#form-subject').on('input', function() {
        var input = $(this);
        var isSubj = input.val();
        if (isSubj) {
            input.removeClass('invalid').addClass('valid');
        } else {
            input.removeClass('valid').addClass('invalid');
        }
    });

    $('#form-message').on('keyup', function() {
        var input = $(this);
        var comment = $(this).val();
        if (comment) {
            input.removeClass('invalid').addClass('valid');
        } else {
            input.removeClass('valid').addClass('invalid');
        }
    });
    $('#submit-button').on('click', function(event) {
        var formData = $('#form').serializeArray();
        console.log(formData);
        var errorFree = true;
        for (var input in formData) {
            var element = $('#form-' + formData[input].name);
            var valid = element.hasClass('valid');
            var errorMessage = $('span', element.parent());
            if (!valid) {
                errorMessage.removeClass('error');
                element.addClass('errorBorder');
                errorFree = false;
            } else {
                errorMessage.addClass('error');
                element.removeClass('errorBorder');
            }
        }
        if (!errorFree) {
            event.preventDefault();
        }
    });

});
