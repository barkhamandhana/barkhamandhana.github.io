<script>
    // Array of texts in different languages
    const texts = [
        "Welcome to my Portfolio !!!",
        "Bienvenido a mi portafolio !!!",
        "欢迎来到我的作品集 !!!",
        "مرحبا بك في محفظتي !!!",
        "Meine Portfolio willkommen !!!",
        // Add more languages here
    ];

    let currentIndex = 0;

    function changeText() {
        document.getElementById('portfolio-text').textContent = texts[currentIndex];
        currentIndex = (currentIndex + 1) % texts.length;
    }

    // Change text every 10 seconds (10000 milliseconds)
    setInterval(changeText, 10000);
</script>