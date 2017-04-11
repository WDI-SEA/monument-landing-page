$(function() {
    $('.submit').on("click", function(event) {
        event.preventDefault();

        $(".edited-element").each(function() {

            if ($(this).val()) {

                $(this).removeClass("error");
                $(this).siblings().hide();

            } else {
                // value is blank
                console.log(this.value + " is blank");
                $(this).addClass("error");
                $(this).siblings().fadeIn(2000);
            }
        });

    });
});
