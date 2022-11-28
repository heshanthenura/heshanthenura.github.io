window.onload = function () {
  const btn = document.getElementById("btn");
  const menu = document.getElementById("mobile-menu");
  console.log(btn);
  btn.addEventListener("click", () => {
    menu.classList.toggle("hidden");
  });
};
