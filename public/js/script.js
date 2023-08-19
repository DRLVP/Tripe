const nav = document.querySelector("#navbar");

window.addEventListener("scroll", function(){
    nav.classList.toggle("sticky", window.scrollY > 50);
})

const menu =document.querySelector("#meni-icon");
const navbar =document.querySelector(".nav__list");

menu.onClick = ()=>{
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('open');
}