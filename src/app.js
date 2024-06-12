document.addEventListener("DOMContentLoaded", () => {
// Icons
const icon = document.getElementById('theme-toggle-icon');

// Theme Vars
const userTheme = localStorage.getItem("theme");
const systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches;

// Initial Theme Check
const themeCheck = () => {
    if (userTheme === "dark" || (!userTheme && systemTheme)) {
        document.documentElement.classList.add("dark");
        icon.classList.remove('fa-moon');
        icon.classList.add('fa-sun');
    } else {
        document.documentElement.classList.remove("dark");
        icon.classList.remove('fa-sun');
        icon.classList.add('fa-moon');
    }
};

// Manual Theme Switch
const themeSwitch = () => {
    if (document.documentElement.classList.contains("dark")) {
        document.documentElement.classList.remove("dark");
        localStorage.setItem("theme", "light");
        icon.classList.remove('fa-sun');
        icon.classList.add('fa-moon');
    } else {
        document.documentElement.classList.add("dark");
        localStorage.setItem("theme", "dark");
        icon.classList.remove('fa-moon');
        icon.classList.add('fa-sun');
    }
};

// Call theme switch on clicking buttons
icon.addEventListener("click", themeSwitch);

// Invoke theme check on initial load
themeCheck();

// Carousel functionality
const carousel = document.getElementById("carousel");
const prevBtn = document.getElementById("prev");
const nextBtn = document.getElementById("next");

let scrollAmount = 0;

nextBtn.addEventListener("click", () => {
  carousel.scrollBy({
    top: 0,
    left: 320,
    behavior: "smooth",
  });
});

prevBtn.addEventListener("click", () => {
  carousel.scrollBy({
    top: 0,
    left: -320,
    behavior: "smooth",
  });
});

//Search button
const searchInput = document.querySelector('.search-input');
      const searchIcon = document.querySelector('.search-icon');

      searchInput.addEventListener('input', () => {
        if (searchInput.value.trim() !== '') {
          searchIcon.style.left = '2rem'; // Move the icon to the left
        } else {
          searchIcon.style.left = '23rem'; // Reset the icon position
        }
      });

//Article List
const nextButton = document.getElementById('page');

    nextButton.addEventListener('click', () => {
        window.location.href = 'articleList.html';
    });
});



