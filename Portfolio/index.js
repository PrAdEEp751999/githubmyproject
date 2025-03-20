/*========================= toggle icon navbar =========================*/
var menuIcon = document.querySelector('#menu-icon');
var navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    navbar.classList.toggle('active')
    menuIcon.classList.toggle('bx-x');
    
};

/*========================= scroll section active link =========================*/

var sections = document.querySelectorAll('section');
var navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        var top = window.scrollY;
        var offset = sec.offsetTop - 150;
        var height = sec.offsetHeight;
        var id = sec.getAttribute('id');

        if(top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        };
    });

    /*========================= scroll section active link =========================*/
    var header = document.querySelector('header');

    header.classList.toggle('sticky', window.scrollY > 100);
    
}; 

/*========================= scroll reveal =========================*/

ScrollReveal({ 
    //reset: true,
    distance: '80px',
    duration: 2000,
    delay:200
 });

 ScrollReveal().reveal('.home-content, .heading', { origin: 'top'});
 ScrollReveal().reveal('.home-img, .services-container, .portfolio-box, .contact form', { origin: 'bottom'});
 ScrollReveal().reveal('.home-content h1, .about-img', { origin: 'left'});
 ScrollReveal().reveal('.home-content p, .about-content', { origin: 'right'});

 /*========================= scroll reveal =========================*/

 var typed = new Typed('.multiple-text', {
    strings: ['Frontend Developer'],
    typeSpeed: 100,
    backSpeed: 100, 
    backDelay: 1000, 
    loop: true
 });


