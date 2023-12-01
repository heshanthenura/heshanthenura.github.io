// JavaScript
function toggleMobileMenu() {
  var mobileNavbar = document.querySelector(".mobile-navbar");
  if (
    mobileNavbar.style.display === "none" ||
    mobileNavbar.style.display === ""
  ) {
    mobileNavbar.style.display = "flex";
    // Add event listener to detect clicks outside the mobile menu
    document.addEventListener("click", closeMobileMenu);
  } else {
    mobileNavbar.style.display = "none";
    // Remove the event listener when the menu is closed
    document.removeEventListener("click", closeMobileMenu);
  }
}

// Function to close the mobile menu when clicked outside
function closeMobileMenu(event) {
  var mobileNavbar = document.querySelector(".mobile-navbar");
  var menuBtn = document.querySelector(".menu-btn button");

  // Check if the clicked element is outside the mobile navbar and menu button
  if (!mobileNavbar.contains(event.target) && !menuBtn.contains(event.target)) {
    mobileNavbar.style.display = "none";
    document.removeEventListener("click", closeMobileMenu);
  }
}
