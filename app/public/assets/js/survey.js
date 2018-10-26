// Capture the form inputs
$("#submit").on("click", function () {
    event.preventDefault();
    // Form validation
    function validateForm() {
        const isValid = true;
        $(".form-control").each(function () {
            if ($(this).val() === "") {
                isValid = false;
            }
        });
        return isValid;
    }
    // If all required fields are filled
    if (validateForm()) {
        // Create an object for the user"s data
        const userInput = {
            name: $("#name").val(),
            photo: $("#photo").val(),
            scores: [
                $("#q1").val(),
                $("#q2").val(),
                $("#q3").val(),
                $("#q4").val(),
                $("#q5").val(),
                $("#q6").val(),
                $("#q7").val(),
                $("#q8").val(),
                $("#q9").val(),
                $("#q10").val()
            ]
        };
        // AJAX post the data to the friends API.
        $.post("/api/employees", userInput, function (data) {
            // Grab the result from the AJAX post so that the best match's name 
            // and photo are displayed.
            $("#matchName").text(data.name);
            $("#matchPhoto").attr("src", data.photo);
        });
    } else {
        alert("Please fill out all fields before submitting!");
    }
});
