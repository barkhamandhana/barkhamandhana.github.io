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
