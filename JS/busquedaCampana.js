document.addEventListener("DOMContentLoaded", function() {
    const atrasBtn = document.querySelector("a[href='interfazInversor.html']");
    const verTodasBtn = document.querySelector("a[href='#']");
    const siguienteBtn = document.querySelector("a[href='#']");
    const contenedorRecuadros = document.getElementById("contenedorrecuadros");

    atrasBtn.addEventListener("click", function() {
        window.location.href = "interfazInversor.html";
    });

    verTodasBtn.addEventListener("click", function() {
        alert("Total campañas cargadas");
    });

    siguienteBtn.addEventListener("click", function() {
        alert("No existen más campañas para mostrar");
    });

    contenedorRecuadros.addEventListener("click", function() {
        window.location.href = "campanaSeleccionada.html";
    });
});
