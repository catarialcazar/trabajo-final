// Typing effect:
var id = "lines";
var element = document.getElementById(id);
var content = ["editorial", "publicitaria", "conceptual"];

var p = 1000;

const instance = new TypeIt("#lines", { loop: true });

for (const str of content) {
    instance
        .type(str)
        .pause(p)
        .delete(0 - str.length);
}

instance.go();

// Back to Top:
let mybutton = document.getElementById("btn-back-to-top");

function scrollFunction() {
    if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}
mybutton.addEventListener("click", backToTop);

function backToTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}


//progress bars animation:
var i = 0;
var bar = document.querySelector(".dynamic1");
var bar1 = document.querySelector(".dynamic2");
var bar2 = document.querySelector(".dynamic3");

var makeProgress = function () {
    if (i < 40) {
        i = i + 1;
        bar.style.width = i + "%";
    }
    if (i < 20) {
        i = i + 1;
        bar1.style.width = i + "%";
    }
    if (i < 60) {
        i = i + 1;
        bar2.style.width = i + "%";
    }

    setTimeout("makeProgress()", 200);
};

window.addEventListener("scroll", () => {
    const scrollable = document.documentElement.scrollHeight - window.innerHeight;
    const scrolled = window.scrollY;

    window.onscroll = function () {
        Barsanimation();
        scrollFunction(); //back-to-top btn
    };
    
    function Barsanimation() {
        if (scrolled > 1800) {
            makeProgress();
            var element = document.getElementById("skills1");
            element.classList.add("animation");
        }
    }

});

