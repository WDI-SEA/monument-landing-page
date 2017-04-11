$("document").ready(function() {
    $("#formbutton").on("click", function(event) {
        event.preventDefault();

        var formFields = ($(".blank"));
        var formError = ($(".error-message"));

        for (var i = 0; i < formFields.length; i++) {
            if (!formFields[i].value); {
                $(formFields[i]).addClass("error");
                $(formError[i]).show();
            }
        }
    });

    $(".blank").on("click", function() {
        var formFields = ($(".blank"));
        var formError = ($(".error-message"));
        for (var i = 0; i < formFields.length; i++) {
            if (formFields[i].value) {
                $(formFields[i]).removeClass("error");
                $(formError[i]).hide();
            }
        }
    });
});
