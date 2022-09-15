
window.addEventListener('scroll',()=>{
    let navbar = document.getElementById('navbar');
    var scrollValue = window.scrollY;
    if(scrollValue<200){
        navbar.classList.remove('bgcolor');
    }
    else{
        navbar.classList.add('bgcolor');
    }
})
var menubtn = document.getElementById('menu-btn');
menubtn.addEventListener('click',()=>{
    let menu = document.getElementById('menu');
    menu.classList.toggle('active');
    menubtn.i.classList.toggle('active');
})
