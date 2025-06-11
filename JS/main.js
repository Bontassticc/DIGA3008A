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
    document.addEventListener("keydown", function (e) {   //adding the arroe function and "esc" to come out of image
    if (lightbox.style.display === "flex") {
      switch (e.key) {
        case "Escape":
          lightbox.style.display = "none";
          break;
        case "ArrowRight":
          currentIndex = (currentIndex + 1) % imageArray.length;
          showImage(currentIndex);
          break;
        case "ArrowLeft":
          currentIndex = (currentIndex - 1 + imageArray.length) % imageArray.length;
          showImage(currentIndex);
          break;
      }
    }
  });


  
});

//async function getQuote() {        //I ATTEMPTED TO USE API, HOWEVER IT PROVED DIFFICULT BECUASE THE WEBSITES WERE FIGHTING AGAINST THE SCHOOLS
                                      //SO SOMEHOW I HAVE TO FIND A SAFE WEBSITE, BECUASE THE CODE RUNS BUT IT CANT LOAD THE QUOTES.
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

document.addEventListener("DOMContentLoaded", function () {
  const searchInput = document.getElementById("searchInput");
  const searchResults = document.getElementById("searchResults");

  // Sample content array - this can be pulled dynamically or expanded manually
  const content = [
    { title: "Blog Post", url: "./BLOG/blogposts.html" },
    { title: "Design Page", url: "./DESIGN/design.html" },
    { title: "Portfolio", url: "./PORTFOLIO/portfolio.html" },
    { title: "Profile", url: "./PROFILE/profile.html" },
    { title: "Essays", url: "./ESSAY/essay.html" },
  ];

  searchInput.addEventListener("input", function () {
    const query = searchInput.value.toLowerCase();
    searchResults.innerHTML = "";

    if (query.trim() !== "") {
      const filtered = content.filter(item => item.title.toLowerCase().includes(query));

      filtered.forEach(item => {
        const li = document.createElement("li");
        li.innerHTML = `<a href="${item.url}">${item.title}</a>`;
        searchResults.appendChild(li);
      });

      if (filtered.length === 0) {
        searchResults.innerHTML = "<li>No results found.</li>";
      }
    }
  });
});

function searchText() {
  const input = document.getElementById("search-input").value.toLowerCase();
  const contentElements = document.querySelectorAll("p, h1, h2, h3, li, div"); // Add or remove tags as needed

  // Clear previous highlights
  contentElements.forEach(el => {
    el.innerHTML = el.innerHTML.replace(/<span class="highlight">(.*?)<\/span>/g, '$1');
  });

  if (input.trim() === "") return;

  contentElements.forEach(el => {
    const text = el.textContent.toLowerCase();
    if (text.includes(input)) {
      const regex = new RegExp(`(${input})`, "gi");
      el.innerHTML = el.innerHTML.replace(regex, '<span class="highlight">$1</span>');
    }
  });
}

window.onscroll = function () {
  const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  const scrolled = (winScroll / height) * 100;
  document.getElementById("progress-bar").style.width = scrolled + "%";
};

//function closePopup() {
 // document.getElementById("popup").style.display = "none";
  //document.getElementById("login").style.display = "block";
//}

//function checkLogin() {
  //const username = document.getElementById("username").value;
  //const password = document.getElementById("password").value;

  //if (password === "password123") {
    //document.getElementById("login").style.display = "none";
    //document.getElementById("content").style.display = "block";

    // Insert name into greeting
    //const greeting = document.getElementById("greeting");
    //greeting.textContent = `🎉 Welcome, ${username}!`;
  //} else {
    //document.getElementById("error").textContent = "Incorrect password 😬";
 /// }
//}

// weather.js

const lat = -26.2041;  // Johannesburg
const lon = 28.0473;
const url = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current_weather=true`;

async function fetchWeather() {
  try {
    const res = await fetch(url);
    if (!res.ok) throw new Error('Network response was not ok');
    
    const data = await res.json();
    const weather = data.current_weather;
    document.getElementById('weather-temp').textContent = 
      weather.temperature.toFixed(1) + '°C';
    document.getElementById('weather-desc').textContent = 
      `Wind: ${weather.windspeed.toFixed(1)} km/h`;
  } catch (err) {
    document.getElementById('weather-desc').textContent = 
      'Could not load weather data';
    console.error('Weather error:', err);
  }
}

document.addEventListener('DOMContentLoaded', fetchWeather);

 document.addEventListener('keydown', function (e) {
  const lightbox = document.querySelector('.lightbox.active');
  if (!lightbox) return;

  const items = document.querySelectorAll('.lightbox-item');
  let currentIndex = [...items].findIndex(el => el.classList.contains('active'));

  if (e.key === 'ArrowRight') {
    if (currentIndex < items.length - 1) {
      items[currentIndex].classList.remove('active');
      items[currentIndex + 1].classList.add('active');
    }
  }
  if (e.key === 'ArrowLeft') {
    if (currentIndex > 0) {
      items[currentIndex].classList.remove('active');
      items[currentIndex - 1].classList.add('active');
    }
  }
});

document.addEventListener("mousemove", function (e) {
  const sparkle = document.createElement("div");
  sparkle.classList.add("sparkle");

  sparkle.style.left = `${e.pageX}px`;
  sparkle.style.top = `${e.pageY}px`;

  document.body.appendChild(sparkle);

  setTimeout(() => {
    sparkle.remove();
  }, 800); // Matches animation duration
});
