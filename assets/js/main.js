// menu nabvar

let line1 = document.querySelector(".line1_menu");
let line2 = document.querySelector(".line2_menu");
let line3 = document.querySelector(".line3_menu");
let menuResponsive = document.querySelector(".menu_responsive");
let scrollStop = document.querySelector("body");

document
  .querySelector(".container_menu_nabvar")
  .addEventListener("click", animationLine);

function animationLine() {
  line1.classList.toggle("active_line1_menu");
  line2.classList.toggle("active_line2_menu");
  line3.classList.toggle("active_line3_menu");
  menuResponsive.classList.toggle("active_menu_responsive");
  scrollStop.classList.toggle("scrollStop");
}

// skills-bars-efect
let skillBar1 = document.querySelector(".stack_bar");
let skillBar2 = document.querySelector(".desiguer_bar");
let skillBar3 = document.querySelector(".web_bar");

const loadBar = (animation, windowsObs) => {
  animation.forEach((entrada) => {
    if (entrada.isIntersecting) {
      skillBar1.classList.add("active_stack");
      skillBar2.classList.add("active_desiguer");
      skillBar3.classList.add("active_web");
    }
  });
};

const windowsObs = new IntersectionObserver(loadBar, {
  root: null,
  rootMargin: "0px 0px 0px 0px",
  threshold: 0.25,
});

windowsObs.observe(skillBar1);
windowsObs.observe(skillBar2);
windowsObs.observe(skillBar3);

// briefcase

const carrusel = document.querySelector(".container_img_carrusel");
let slideChage = document.querySelectorAll(".img_carrusel");
  console.log(slideChage);
let last = slideChage[slideChage.length - 1];
console.log(last);
const next = document.querySelector(".rigth");
const back = document.querySelector(".left");

carrusel.insertAdjacentElement("afterbegin", last);

function nextImg() {
  let changeFirts = document.querySelectorAll(".img_carrusel")[0];
  slideChage.style.marginLeft = "-100%";
  slideChage.style.transition = "all 0.5s";
  setTimeout(function() {
    slideChage.style.transition = "none";
    slideChage.insertAdjacentElement("beforeend", changeFirts);
    slideChage.style.marginLeft = "-100%";
  }, 500);
}
next.addEventListener("click", function () {
  nextImg();
});
