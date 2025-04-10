// modo oscuro
const botonModoOscuro = document.getElementById("modoOscuro");
const body = document.body;
const menuToggle = document.getElementById("menu-toggle");
const menu = document.querySelector("nav ul");

botonModoOscuro.addEventListener("click", () => {
    body.classList.toggle("dark-mode");
    if (body.classList.contains("dark-mode")) {
        botonModoOscuro.textContent = "☀️";
    } else {
        botonModoOscuro.textContent = "🌙";
    }
});
// Menú hamburguesa
menuToggle.addEventListener("click", () => {
    menu.classList.toggle("active");
});



/*FORMULARIO*/

const text = document.getElementById("validate");
const form = document.querySelector(".form form");

form.addEventListener("submit", (e) => {
    e.preventDefault(); 
    text.classList.add("show"); 
});
