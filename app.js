const toggler = document.getElementById("toggle-input");
mainDisplay = document.getElementById("main");

toggler.addEventListener("change", () => {
  mainDisplay.classList.toggle("is-dark-mode");
});
