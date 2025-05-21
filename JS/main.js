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
  

 // Hamburger Menu Toggle
document.addEventListener("DOMContentLoaded", () => {
  const menuToggle = document.getElementById("menu-toggle");
  const mobileMenu = document.getElementById("mobile-menu");

  if (menuToggle && mobileMenu) {
    menuToggle.addEventListener("click", () => {
      mobileMenu.classList.toggle("show");
    });
  } else {
    console.error("Menu elements not found. Check your HTML structure.");
  }
  
});

document.addEventListener("DOMContentLoaded", function () {
  const backToTopBtn = document.getElementById("back-to-top");

  // Show button when user scrolls down 300px
  window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
      backToTopBtn.style.display = "block";
    } else {
      backToTopBtn.style.display = "none";
    }
  });

  // Scroll smoothly to top on button click
  backToTopBtn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const images = document.querySelectorAll(".gallery-img");
  const lightbox = document.getElementById("lightbox");
  const lightboxImg = document.getElementById("lightbox-img");
  const closeBtn = document.querySelector(".close");
  const nextBtn = document.getElementById("next");
  const prevBtn = document.getElementById("prev");

  let currentIndex = 0;
  const imageArray = Array.from(images);

  function showImage(index) {
    const src = imageArray[index].src.replace("-thumb", ""); // adjust if needed
    lightboxImg.src = src;
    lightbox.style.display = "flex";
  }

  images.forEach((img, index) => {
    img.addEventListener("click", () => {
      currentIndex = index;
      showImage(currentIndex);
    });
  });

  closeBtn.addEventListener("click", () => lightbox.style.display = "none");

  nextBtn.addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % imageArray.length;
    showImage(currentIndex);
  });

  prevBtn.addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + imageArray.length) % imageArray.length;
    showImage(currentIndex);
  });

  lightbox.addEventListener("click", (e) => {
    if (e.target === lightbox) lightbox.style.display = "none";
  });
});

//async function getQuote() {
  //try {
   // const response = await fetch("https://api.allorigins.win");

   // if (!response.ok) {
   //   throw new Error(`HTTP error! status: ${response.status}`);
   // }
  // const quotes = await response.json();
//const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
//document.getElementById("quote-text").innerText = `"${randomQuote.text}"`;
//document.getElementById("quote-author").innerText = `— ${randomQuote.author || "Unknown"}`;

  //} catch (error) {
    //console.error("Error fetching quote:", error);
    //document.getElementById("quote-text").innerText = "Could not load quote.";
    //document.getElementById("quote-author").innerText = "";
 // }
//}

// Load a quote on page load
//document.addEventListener("DOMContentLoaded", getQuote);

// Load a new quote when button is clicked
//document.getElementById("new-quote").addEventListener("click", getQuote);

// JavaScript
const quotes = [
  { text: "Creativity takes courage.", author: "Henri Matisse" },
  { text: "Art is not what you see, but what you make others see.", author: "Edgar Degas" },
  { text: "Every artist was first an amateur.", author: "Ralph Waldo Emerson" },
  { text: "Simplicity is the ultimate sophistication.", author: "Leonardo da Vinci" },
  { text: "Design is intelligence made visible.", author: "Alina Wheeler" }
];

function generateQuote() {
  const random = quotes[Math.floor(Math.random() * quotes.length)];
  document.getElementById("quote-text").innerText = `"${random.text}"`;
  document.getElementById("quote-author").innerText = `— ${random.author}`;
}

// Automatically load one on page load
document.addEventListener("DOMContentLoaded", generateQuote);
