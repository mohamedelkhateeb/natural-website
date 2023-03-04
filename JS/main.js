let menu = document.querySelector('.fa-bars');
let navbar = document.querySelector('.navbar');
let header = document.querySelector('#header');
let topSite = document.getElementById('top')

menu.addEventListener('click',function(){
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('nav-toggle');
});

window.addEventListener('scroll',function(){
    menu.classList.remove('fa-times');
    navbar.classList.remove('nav-toggle');
});



topSite.addEventListener('click' , function(){
    // window.scrollTo(0,0)

    window.scrollTo({
        top : 0,
        left : 0,
        behavior : "smooth"
    });
} ) 