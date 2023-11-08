
function backtop() {
    window.scrollTo(0, 0);
}

window.addEventListener("scroll", function () {
    const mybackto = document.getElementById("backtops");
    if (document.documentElement.scrollTop > 500) {
        mybackto.style.display = "block";
    } else {
        mybackto.style.display = "none";
    }
});

// nav varible
let view = document.querySelector(".view");
let cross1 = document.querySelector(".cross1");
let cross2 = document.querySelector(".cross2");
let cross3 = document.querySelector(".cross3");
// navbar
function nav() {
    view.classList.toggle("end-0");
    cross1.classList.toggle("crossLine1");
    cross2.classList.toggle("crossLine2");
    cross3.classList.toggle("d-none");
    document.querySelector("body").classList.toggle("overflow-hidden");
}

    function nav2() {
        view.classList.toggle("end-0");
        cross1.classList.toggle("crossLine1");
        cross2.classList.toggle("crossLine2");
        cross3.classList.toggle("d-none");
        document.querySelector("body").classList.remove("overflow-hidden");
    }