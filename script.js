// NAVBAR
let lastScrollTop = 0;
let navbar = document.getElementById('navbar');

window.addEventListener('scroll',function() {
  const scrollTop = window.pageXOffset ||
  this.document.documentElement.scrollTop;

  if (scrollTop > lastScrollTop) {
    navbar.style.top='-50px';
  } else {
    navbar.style.top='0';
  }
  lastScrollTop = scrollTop;
});


// TYPED
var typed3 = new Typed('.typed', {
    strings: ["I'm a student ","I'm a programmer","I'm  Mouniym Anis ! "],
    typeSpeed: 30,
    backSpeed: 60,
    smartBackspace: true, // this is a default
    loop: false
  });


// AOS
AOS.init();