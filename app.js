const toggler = document.getElementById("toggle-input");
mainDisplay = document.getElementById("main");

toggler.addEventListener("change", () => {
  mainDisplay.classList.toggle("is-dark-mode");
});

/**
 * Grabbed Toggler
 * Grabbed overall display wrapper which was the main tag
 * add 'change' event with an anonymous function which toggles a class name defined in dark-mode.css
 */
