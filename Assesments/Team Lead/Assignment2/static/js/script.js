let menu=document.querySelector('#menu-bar');
let navbar=document.querySelector('header .navbar');

menu.onclick=()=>{
    navbar.classList.toggle('active');
};

window.onscroll=()=>{
    navbar.classList.remove('active');
};


