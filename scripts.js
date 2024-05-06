document.addEventListener("DOMContentLoaded", function() {
    const works = document.querySelectorAll(".work");

    works.forEach(work => {
        const img = work.querySelector("img");
        const overlay = work.querySelector(".overlay");

        work.addEventListener("mouseenter", function() {
            img.style.filter = "blur(5px)";
            overlay.style.opacity = "1";
        });

        work.addEventListener("mouseleave", function() {
            img.style.filter = "none";
            overlay.style.opacity = "0";
        });
    });
});

var lastScrollTop = 0;
var navbar = document.querySelector('header');
var delta = 5;
var navbarHeight = navbar.offsetHeight;

window.addEventListener('scroll', function() {
  var currentScroll = window.pageYOffset || document.documentElement.scrollTop;
  
  if (Math.abs(lastScrollTop - currentScroll) <= delta) {
    return;
  }

  if (currentScroll > lastScrollTop && currentScroll > navbarHeight) {
    // Scroll down
    navbar.classList.add('hide');
  } else {
    // Scroll up
    navbar.classList.remove('hide');
  }

  lastScrollTop = currentScroll;
});
