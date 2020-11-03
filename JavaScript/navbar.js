$(document).ready(function () {
    $('.dropdown-toggle').dropdown();

// Get the container element


// Get all buttons with class="btn" inside the container
var btns = 0;


if(window.location.href.indexOf("sign_upHTML.php") > -1) {
btns = document.getElementById("btn6");
}
else if(window.location.href.indexOf("EndorsementHTML") > -1) {
btns = document.getElementById("btn2");
}
else if(window.location.href.indexOf("ProjectsHTML") > -1) {
btns = document.getElementById("btn5");
}
else if(window.location.href.indexOf("loginHTML") > -1) {
btns = document.getElementById("btn7");
}
else if(window.location.href.indexOf("contactHTML.php") > -1) {
btns = document.getElementById("btn3");
}
else if(window.location.href.indexOf("IdeasHTML") > -1) {
btns = document.getElementById("btn4");
}
else if (window.location.href.indexOf("RSA.php") > -1) {
    btns = document.getElementById("btnRSA");
}
else {
btns = document.getElementById("btn1");  
}

btns.className = "active-page";
// Loop through the buttons and add the active class to the current/clicked button

});


