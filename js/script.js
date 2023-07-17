// document.getElementById("normal_button1").click();
// document.getElementById("normal_button2").click();
// document.getElementById("normal_button3").click();



function make_font1_normal() {
    // document.getElementById("normal_button1").click();

    var font1_examples = document.getElementById("font1-examples");

    if (font1_examples.className == "font1_italic") {
        font1_examples.className = "font1_normal";
        // } else {
        // font1_examples.className = "font1_italic";
    }
}
function make_font1_italic() {
    var font1_examples = document.getElementById("font1-examples");

    if (font1_examples.className == "font1_normal") {
        font1_examples.className = "font1_italic";
        // } else {
        // font1_examples.className = "font1_normal";
    }
}

function make_font2_normal() {
    // document.getElementById("normal_button2").click();

    var font2_examples = document.getElementById("font2-examples");

    if (font2_examples.className == "font2_italic") {
        font2_examples.className = "font2_normal";
        // } else {
        // font1_examples.className = "font1_italic";
    }
}

function make_font2_italic() {
    var font2_examples = document.getElementById("font2-examples");

    if (font2_examples.className == "font2_normal") {
        font2_examples.className = "font2_italic";
        // } else {
        // font1_examples.className = "font1_normal";
    }
}

function make_font3_normal() {
    // document.getElementById("normal_button3").click();

    var font3_examples = document.getElementById("font3-examples");

    if (font3_examples.className == "font3_italic") {
        font3_examples.className = "font3_normal";
        // } else {
        // font1_examples.className = "font1_italic";
    }
}

function make_font3_italic() {
    var font3_examples = document.getElementById("font3-examples");

    if (font3_examples.className == "font3_normal") {
        font3_examples.className = "font3_italic";
        // } else {
        // font1_examples.className = "font1_normal";
    }
}

let sections = document.querySelectorAll("section");
let links = document.querySelectorAll("nav a");

window.onscroll = () => {
    sections.forEach((sec) => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute("id");

        if (top >= offset && top <= offset + height) {
            links.forEach((link) => {
                link.classList.remove("active");
                document.querySelector('nav a[href*="' + id + '"]').classList.add("active");
            });
        }
    });
};
