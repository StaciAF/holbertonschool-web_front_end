$(document).ready(function () {
    function setCookies() {
        let fNameCookie = document.cookie = "firstname =" + $('#firstname').val()
        let emailCookie = document.cookie = "email =" + $('#email').val()
        $('#logIn').click(setCookies())
    }

    function showCookies() {
        let domPara = $('<p></p>')
        document.body.innerHTML('Cookies:' + cookie.val())
        $('body').append(domPara)
    }
    setCookies()
    showCookies()

})    