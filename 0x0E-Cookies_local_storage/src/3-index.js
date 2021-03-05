$(document).ready(function () {
    $('#login').onclick = function setCookies() {
        let fNameCookie = document.getElementById('firstname').value;
        let emailCookie = document.getElementById('email').value;
        document.cookie = `firstname=${fNameCookie}`;
        document.cookie = `email=${emailCookie}`;
    }

    $('#getCookies').onclick = function showCookies() {
        let cookie = document.cookie;
        let newPara = document.createElement('p');
        newPara.innerHTML = `Cookies: ${cookie}`;
        $('body').append(newPara);

    }
})    