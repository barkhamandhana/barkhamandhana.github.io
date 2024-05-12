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

document.addEventListener("DOMContentLoaded", function() {
    // Get the image element
    const image = document.querySelector('.work img');

    // Create a new Image object
    const img = new Image();

    // Set the src attribute of the Image object to the src of the image element
    img.src = image.src;

    // When the Image object has loaded
    img.onload = function() {
        // Create a canvas element
        const canvas = document.createElement('canvas');
        const ctx = canvas.getContext('2d');

        // Set canvas dimensions to match the image
        canvas.width = img.width;
        canvas.height = img.height;

        // Draw the image onto the canvas
        ctx.drawImage(img, 0, 0, img.width, img.height);

        // Get the image data
        const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
        const data = imageData.data;

        // Iterate through the pixel data to find the maximum color
        let maxColor = [0, 0, 0]; // Initialize with black color
        for (let i = 0; i < data.length; i += 4) {
            // Extract the RGB values of each pixel
            const r = data[i];
            const g = data[i + 1];
            const b = data[i + 2];

            // Update maxColor if current pixel color is greater
            if (r > maxColor[0] || g > maxColor[1] || b > maxColor[2]) {
                maxColor = [r, g, b];
            }
        }

        // Set the overlay background color to the maximum color of the image
        const overlay = document.querySelector('.work .overlay');
        overlay.style.backgroundColor = `rgb(${maxColor[0]}, ${maxColor[1]}, ${maxColor[2]})`;
    };
});
