// Offcanvas menu:
(function mainScript() {
    "use strict";
    const offcanvasToggle = document.querySelector('[data-bs-toggle="offcanvas"]');

    offcanvasToggle.addEventListener("click", function () {
    });
})();

let navLinks = document.getElementsByClassName('nav-link');
for (let i = 0; i < navLinks.length; i++) {
    navLinks[i].addEventListener('click', hideAfter);
};
function hideAfter(){
    document.getElementById("offcanvasRight").classList.remove('show');
    document.querySelector('.offcanvas-backdrop').classList.remove('show');
}

//FormSubmit:
document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("btnContactUs").onclick = function () {
        const userName = document.getElementById("name").value;
        const userEmail = document.getElementById("email").value;
        const userMessage = document.getElementById("message").value;
        const url = "https://formsubmit.co/ajax/36dddbbd7c4b28b40631df1bb72b7203";

        const xhr = new XMLHttpRequest();
        xhr.open("POST", url, true);
        xhr.setRequestHeader("Content-Type", "application/json; charset=UTF-8");
        xhr.addEventListener("load", function (event) {
            document.getElementById("reused_form").style.display = "none";
            document.getElementById("success_message").style.display = "";
        });

        xhr.addEventListener("error", function (event) {
            document.getElementById("reused_form").style.display = "none";
            document.getElementById("error_message").style.display = "";
        });
        const body = JSON.stringify({ Name: userName, Email: userEmail, Message: userMessage });
        xhr.send(body);
    };
});
