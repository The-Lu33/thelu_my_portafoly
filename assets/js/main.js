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

const slideContainer = document.querySelector(".container_slide");
let slide = document.querySelector(".slide");
let image = document.querySelectorAll(".section_slide");
let last = image[image.length - 1];
const right = document.querySelector(".rigth");
const back = document.querySelector(".left");

slide.insertAdjacentElement("afterbegin", last);

function nextSlide() {
  let first = document.querySelectorAll(".img_slide")[0];
  slide.style.marginLeft = "-200%";
  slide.style.transition = "all .5s  ease";
  setTimeout(function () {
    slide.style.transition = "none";
    slide.insertAdjacentElement("beforeend", first);
    slide.style.marginLeft = "-100%";
  }, 500);
}

function backSlide() {
  let lastsection = document.querySelectorAll(".img_slide");
  let lastsection2 = lastsection[lastsection.length - 1];
  slide.style.marginLeft = "0%";
  slide.style.transition = "all 0.5s ease";
  setTimeout(function () {
    slide.style.transition = "none";
    slide.insertAdjacentElement("afterbegin", lastsection2);
    slide.style.marginLeft = "-100%";
  }, 500);
}

right.addEventListener("click", function () {
  nextSlide();
});

back.addEventListener("click", function () {
  backSlide();
});
