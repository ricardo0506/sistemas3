document.addEventListener("DOMContentLoaded", function () {
    // Validación para asegurarse de que el campo "Monto a recaudar" solo contenga números
    const montoInput = document.getElementById("monto");

    montoInput.addEventListener("input", function () {
        const regex = /[^0-9]/g;
        this.value = this.value.replace(regex, "");
    });

    // Manejo del botón "Guardar"
    const guardarBtn = document.getElementById("guardarBtn");

    guardarBtn.addEventListener("click", function (e) {
        e.preventDefault();

        const descripcion = document.getElementById("descripcion").value;
        const monto = document.getElementById("monto").value;
        const fecha = document.getElementById("fecha").value;
        const imagen = document.getElementById("imagen").value;

        // Verificar que todos los campos requeridos estén llenos
        if (descripcion.trim() === "" || monto.trim() === "" || fecha.trim() === "" || imagen.trim() === "") {
            alert("Por favor, complete todos los campos requeridos.");
        } else {
            // Si todos los campos están llenos, mostrar mensaje de guardado exitoso y redirigir
            alert("Guardado exitoso.");
            window.location.href = "interfazRecaudador.html"; // Cambia esto según tu estructura de URL
        }
    });
});
