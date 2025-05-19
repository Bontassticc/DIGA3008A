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
  

document.addEventListener("DOMContentLoaded", () => {
  const menuToggle = document.getElementById("menu-toggle");
  const mobileMenu = document.getElementById("mobile-menu");

  if (menuToggle && mobileMenu) {
    menuToggle.addEventListener("click", () => {
      mobileMenu.classList.toggle("show");
      console.log("Hamburger menu clicked. Visible:", mobileMenu.classList.contains("show"));
    });
  } else {
    console.error("Menu elements not found. Check your HTML structure.");
  }
});

