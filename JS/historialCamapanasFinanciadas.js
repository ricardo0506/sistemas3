// JavaScript para redirigir a interfazInversor.html al hacer clic en "Atrás"
function redirectToInversor() {
    window.location.href = "interfazInversor.html";
}

// Agregar evento al botón "Atrás" para redireccionar
const botonAtras = document.querySelector("a[href='#']");
botonAtras.addEventListener("click", redirectToInversor);
