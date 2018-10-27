// Capture the form inputs
$("#submit").on("click", function () {
    event.preventDefault();
    // Form validation 
        // Create an object for the user"s data
        const userData = {
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
        console.log(userData)
        // AJAX post the data to the friends API.
        $.post("/api/employees", userData, function (data) {
            console.log(data)
            // to Grab the result from the AJAX post so that the best match's name 
            // and photo are displayed.
            $("#match-name").text(data.name);
            $("#match-pic").attr("src", data.photo);
        }); 
    //  else {
    //     alert("Please fill out all fields before submitting!");
    // }
});


