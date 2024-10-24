//Togel class active
const navbarNav = document.querySelector('.navbar-nav');
//ketika menu di click
document.querySelector('#menu').onclick =()=>{navbarNav.classList.toggle('active');}; 


//KLICK DILUAR SIDE BAR UNTUK MENGHILANGKAN NAV
const Nav = document.querySelector('.navbar-nav')//class
const menu = document.querySelector(`#menu`)//id
document.addEventListener(`click`,function(e){
    if (!menu.contains(e.target) && !Nav.contains(e.target)) {Nav.classList.remove(`active`)}
})