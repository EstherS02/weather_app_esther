$(document).ready(function(){

    var getUserFromLocal = localStorage.getItem("username");
    var getPassFromLocal = localStorage.getItem("password");
    var getCheckboxFromLocal = localStorage.getItem("checkbox");

    if(getUserFromLocal){
        $('#username').val(getUserFromLocal);
    }

    if(getPassFromLocal){
        $('#password').val(getPassFromLocal);
    }

    if(getCheckboxFromLocal){
        $('#remberMe').prop('checked', true);
    }


    $('#remberMe').click(function(){

        var userName = $('#username').val();
        var password = $('#password').val();

        if($("#remberMe").prop('checked') == true){

            if(userName != '') {
                localStorage.setItem("username", userName );
            }

            if(password != '') {
                localStorage.setItem("password", password );
            }

            localStorage.setItem("checkbox", true );

        } else {
            localStorage.clear();
        }
    })
})