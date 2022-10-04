// menu nabvar

let line1 = document.querySelector(".line1_menu")
let line2 = document.querySelector(".line2_menu")
let line3 = document.querySelector(".line3_menu")

document.querySelector(".container_menu_nabvar").addEventListener("click", animationLine)

function animationLine(){
    line1.classList.toggle("active_line1_menu")
    line2.classList.toggle("active_line2_menu")
    line3.classList.toggle("active_line3_menu")

}