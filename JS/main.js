document.addEventListener("DOMContentLoaded", function () {
    const text = "HI, MY LOVES...";
    const textElement = document.getElementById("typed-text");
    let index = 0;

    function typeLetter() {
        if (index < text.length) {
            textElement.innerHTML += text.charAt(index);
            index++;
            setTimeout(typeLetter, 80); // 80ms delay between characters
        }
    }

    typeLetter();
});

// Reading Progress Bar Script
document.addEventListener("DOMContentLoaded", function () {
    const progressBar = document.getElementById("reading-progress-bar");
  
    window.addEventListener("scroll", function () {
      const totalHeight = document.body.scrollHeight - window.innerHeight;
      const progress = (window.scrollY / totalHeight) * 100;
      progressBar.style.width = progress + "%";
    });
  });
  

  // JavaScript for Mobile Menu Toggle
document.addEventListener("DOMContentLoaded", function() {
  const menuToggle = document.getElementById("menu-toggle");
  const mobileMenu = document.getElementById("mobile-menu");
  const menuOverlay = document.getElementById("menu-overlay");

  // Toggle Menu and Overlay
  menuToggle.addEventListener("click", function() {
    mobileMenu.classList.toggle("active");
    menuOverlay.classList.toggle("active");
  });

  // Close menu when clicking a link or overlay
  mobileMenu.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", function() {
      mobileMenu.classList.remove("active");
      menuOverlay.classList.remove("active");
    });
  });

  menuOverlay.addEventListener("click", function() {
    mobileMenu.classList.remove("active");
    menuOverlay.classList.remove("active");
  });
});
