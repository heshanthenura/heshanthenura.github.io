const header = document.querySelector(".navbar");
const navbarBrand = document.querySelector(".navbar-brand");
const navLinks = document.querySelectorAll(".navbar-nav .nav-link");
const navbarTogglerIcon = document.querySelector(".navbar-toggler-icon");

window.onscroll = function () {
  var top = window.scrollY;
  if (top >= 100) {
    header.classList.add("navbarDark");
    header.classList.remove("navbarLight");
    navbarBrand.classList.remove("navbarBrandLight");
    navLinks.forEach((link) => link.classList.remove("navLinkLight"));
    navbarBrand.style.color = "white";
    navLinks.forEach((link) => (link.style.color = "white"));
    navbarTogglerIcon.style.color = "white"; // Set icon color to white
  } else {
    header.classList.remove("navbarDark");
    header.classList.add("navbarLight");
    navbarBrand.classList.add("navbarBrandLight");
    navLinks.forEach((link) => link.classList.add("navLinkLight"));
    navbarBrand.style.color = "black";
    navLinks.forEach((link) => (link.style.color = "black"));
    navbarTogglerIcon.style.color = "black"; // Set icon color to black
  }
};

// Initial text and icon color
navbarBrand.style.color = "black";
navLinks.forEach((link) => (link.style.color = "black"));
navbarTogglerIcon.style.color = "black"; // Set initial icon color to white
function calculateAge(birthYear) {
  const currentYear = new Date().getFullYear();
  return currentYear - birthYear;
}

// Update the age element with calculated age
const ageElement = document.getElementById("age");
const birthYear = 2003; // Your birth year
ageElement.textContent = "Age: " + calculateAge(birthYear);