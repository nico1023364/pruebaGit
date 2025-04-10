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