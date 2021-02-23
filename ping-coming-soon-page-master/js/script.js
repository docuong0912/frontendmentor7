// JavaScript source code
function invalidEmailCheck() {
    var i = 0;
    var x = document.getElementById("email");
    var error = document.getElementById("error");
    var check = x.value.indexOf(".");
    if (check == -1) {
        error.style.display = "block";
        x.style.border = "solid red";
    }
    else {
        error.style.display = "none";
        x.style.border = "solid black";
    }
}
