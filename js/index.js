document.addEventListener("DOMContentLoaded", function () {
    var navigation = document.getElementById("navigation");
  
    window.addEventListener("scroll", function () {
      if (window.scrollY > 10) {
        navigation.classList.add("scrolled");
      } else {
        navigation.classList.remove("scrolled");
      }
    });
  });
  