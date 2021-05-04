$(document).ready(function(){
    $("#srchBtn").click(function(){
        $("#forcast").text("loading....");
        var cityInput = $("#city").val();

        if(cityInput == ''){
            alert("Please enter city name...");
            return;
        }

        $.ajax({
            url: `/weather?city=${cityInput}`,
            type: 'GET',
            success: function(res) {
                $("#forcast").text(`The forcast of given city is ${res.forcast}`);
                $("#city").val('');
            },
            error: function(err) {
                $("#forcast").text("Unable to get forcast...");
            }
        });
    })
});