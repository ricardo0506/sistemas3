document.addEventListener("DOMContentLoaded", function () {
    const guardarButton = document.getElementById("guardarButton");
    const mensajeError = document.getElementById("mensajeError");
    const mensajeExito = document.getElementById("mensajeExito");

    guardarButton.addEventListener("click", function (event) {
        event.preventDefault();

        // Obtén los valores de los campos
        const codigoTarjeta = document.querySelector('input[name="codigoTarjeta"]').value;
        const tipoTarjeta = document.querySelector('select[name="tipoTarjeta"]').value;
        const codigoSeguridad = document.querySelector('input[name="codigoSeguridad"]').value;

        // Verifica si todos los campos están llenos
        if (codigoTarjeta === "" || tipoTarjeta === "" || codigoSeguridad === "") {
            mensajeError.textContent = "Por favor, complete todos los campos.";
            mensajeError.style.display = "block";
            mensajeExito.style.display = "none";
        } else if (!/^\d+$/.test(codigoTarjeta) || codigoTarjeta.length !== 16) {
            mensajeError.textContent = "El código de tarjeta debe ser un número de 16 dígitos.";
            mensajeError.style.display = "block";
            mensajeExito.style.display = "none";
        } else if (!/^\d+$/.test(codigoSeguridad) || codigoSeguridad.length !== 6) {
            mensajeError.textContent = "El PIN de seguridad debe ser un número de 6 dígitos.";
            mensajeError.style.display = "block";
            mensajeExito.style.display = "none";
        } else {
            // Todos los campos están llenos y los códigos son válidos
            mensajeError.style.display = "none";
            mensajeExito.style.display = "block";
            mensajeExito.textContent = "El retiro será procesado en breve.";
        }
    });
});
