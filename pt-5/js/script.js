$(function() {
    console.log("jQuery works!");

    $(".submit").on('click', function(event) {
        event.preventDefault();
        console.log($("submit clicked"));
        // what do we do when this is clicked
        console.log($(".edited-element"));

        $(".edited-element").each(function() {
            // console.log(this);
            // console.log($(this).val());
            // console.log($(this).val());
            if ($(this).val()) {
                // value is non-blank
                $(this).removeClass("error");
                $(this).siblings().hide();
            } else {
                // value is blank
                // console.log($(this).val() + " is blank");
                $(this).addClass("error");
                $(this).siblings().fadeIn(1000);
            }
        });


    });

});


// $("form").on("submit", function(event) {
//         var queryText = $("query-input").val();
//         console.log(queryText);

//         if (queryText.length < 5) {
//             event.preventDefault();

//             $('#query-input-error-message').text(`Query sting must be at least 5 character long. "${queryText}" is only ${queryText.length} characters long`);

//         } else {
//             // go to google!
//         }
//     }
// });
