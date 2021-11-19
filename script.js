let liste1 = document.querySelector(".liste1");
let color = document.querySelector(".color");
let login = document.querySelector(".login");
let aboutUs = document.querySelector(".about-title");
let princingTitle = document.querySelector(".princing-title");
let services = document.querySelector('.services');

// Animation header
liste1.onmouseover = function(e) {
    e.target.style.color = "#FFB400";
}
liste1.onmouseout = function(e) {
    e.target.style.color = "#A8A8A8";
}
color.onmouseover = function(e) {
    e.target.style.color = "#FFB400";
}
color.onmouseout = function(e) {
    e.target.style.color = "#A8A8A8";
}
login.onmouseover = function(e) {
    e.target.style.fontWeight = "bold";
}
login.onmouseout = function(e) {
    e.target.style.fontWeight = "";
}

//Animation About Us
window.onscroll = function() {
    aboutUs.classList.add('anim');
};


//Animation partie Services
let tab_elementAnim = document.querySelectorAll('.animeToi');
let windowHeight = window.innerHeight;

window.addEventListener("scroll", function() {
    let scrollTo = window.pageYOffset;
    tab_elementAnim.forEach( function(el) {
        let positionElement = el.offsetTop;
        if (positionElement - windowHeight - scrollTo < -150) {
            el.classList.add('active');
        }
    })
})

