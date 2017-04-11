// takes list of input fields and looks to see if any are blank
// if so, triggers errors (red border, message)
function checkForNoInput(inputs) {
    for (var i = 0; i < inputs.length; i++) {
        if (!inputs[i].value) {
            $(inputs[i]).addClass("error");
            $(inputs[i]).siblings().show();
            // I went back an added divs in my HTML to house the <p> message with it
        }
    }
}

// resets errors each time
function clearErrors() {
    $(".error").removeClass("error");
    $(".error-message").hide();
}

function onSubmit(event) {
    // grabs only inputs in form - couldn't quite figure out how to use this correctly with the form and input selectors...
    var inputFields = $("form input, textarea").not("footer input, [type='submit']");

    clearErrors();

    event.preventDefault();
    checkForNoInput(inputFields);
}



$(function() {

    $("form").on("submit", onSubmit);
});
