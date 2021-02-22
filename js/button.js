const button = document.getElementById("burguer");
const nav = document.getElementById("nav");

button.addEventListener("click", (e) => {
  if (button.classList.contains("animation")) {
    button.classList.remove("animation");
    nav.classList.remove("nav-links-ul");
  } else {
    button.classList.add("animation");
    nav.classList.add("nav-links-ul");
  }
});
