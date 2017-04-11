$(function() {


    function checkFill(event) {
        event.preventDefault();
        var j = 0;
        console.log($(`*[data-input=${j}]`).val());
        for (var i = 0; i < 4; i++) {
            if ($(`*[data-input=${i}]`).val() === "") {
                $(`*[data-message=${i}]`).fadeIn();
                $(`*[data-input=${i}]`).addClass('error');
            } else {
                $(`*[data-message=${i}]`).fadeOut("slow");

            }

        }
    }

    $('.commentForm').submit(checkFill);












});
