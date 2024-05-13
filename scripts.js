document.addEventListener("DOMContentLoaded", function() {
    const works = document.querySelectorAll(".work");

    works.forEach(work => {
        const img = work.querySelector("img");
        const overlay = work.querySelector(".overlay");
        const title = overlay.querySelector(".title");
        const subtitle = overlay.querySelector(".subtitle");

        work.addEventListener("mouseenter", function() {
            img.style.filter = "brightness(70%)"; // Dim the image
            overlay.classList.add("flip"); // Add flip class to overlay
            overlay.style.opacity = "1"; // Show the overlay
        });

        work.addEventListener("mouseleave", function() {
            img.style.filter = "none"; // Restore the image to its original brightness
            overlay.classList.remove("flip"); // Remove flip class from overlay
            overlay.style.opacity = "0"; // Hide the overlay
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

const video = document.getElementById('heroVideo');

// Pause the video and set it to the last frame when it ends
video.addEventListener('ended', function() {
  video.pause();
  video.currentTime = video.duration;
});
