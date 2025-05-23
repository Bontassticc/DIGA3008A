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
