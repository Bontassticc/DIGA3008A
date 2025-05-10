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
  
  // Smooth Slideshow Transition Function
document.addEventListener("DOMContentLoaded", function() {
    const links = document.querySelectorAll("a[href]");
  
    links.forEach(link => {
      link.addEventListener("click", function(event) {
        const href = this.getAttribute("href");
  
        if (!href.startsWith("#") && !href.includes("mailto:") && !href.includes("http")) {
          event.preventDefault();
          const pageOverlay = document.createElement("div");
          pageOverlay.classList.add("page-transition");
          document.body.appendChild(pageOverlay);
          
          setTimeout(() => {
            window.location.href = href;
          }, 500); // Adjust time to match the CSS transition duration
        }
      });
    });
  
    window.addEventListener("load", function() {
      const pageOverlay = document.querySelector(".page-transition");
      if (pageOverlay) {
        pageOverlay.classList.add("page-transition-active");
        setTimeout(() => {
          pageOverlay.remove();
        }, 500); // Adjust time to match the CSS transition duration
      }
    });
  });
  