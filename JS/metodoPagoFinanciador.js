document.addEventListener("DOMContentLoaded", function () {
    const guardarBtn = document.getElementById("guardarBtn");
    const mensajeExito = document.getElementById("mensajeExito");
    const mensajeCampos = document.getElementById("mensajeCampos");

    guardarBtn.addEventListener("click", function (event) {
        event.preventDefault(); // Evita que se envíe el formulario

        // Obtiene los valores de los campos
        const numeroTarjeta = document.getElementById("numeroTarjeta").value;
        const codigoTarjeta = document.getElementById("codigoTarjeta").value;
        const pinSeguridad = document.getElementById("pinSeguridad").value;
        const confirmarPin = document.getElementById("confirmarPin").value;

        // Valida que los campos estén llenos
        if (numeroTarjeta && codigoTarjeta && pinSeguridad && confirmarPin) {
            // Valida que el número de tarjeta sea un número de 16 dígitos
            if (!isNaN(numeroTarjeta) && numeroTarjeta.length === 16) {
                // Valida que el código de tarjeta sea un número de 4 dígitos
                if (!isNaN(codigoTarjeta) && codigoTarjeta.length === 4) {
                    // Valida que el PIN de seguridad sea un número de 6 dígitos
                    if (!isNaN(pinSeguridad) && pinSeguridad.length === 6) {
                        // Valida que el PIN de seguridad y el confirmar PIN sean iguales
                        if (pinSeguridad === confirmarPin) {
                            // Aquí puedes realizar el proceso de guardado de información
                            // Muestra el mensaje de éxito
                            mensajeExito.style.display = "block";
                            mensajeCampos.style.display = "none";

                            // Redirige a la interfaz del inversor después de 2 segundos
                            setTimeout(function () {
                                window.location.href = "InterfazInversor.html";
                            }, 2000);
                        } else {
                            // Muestra mensaje de error si el PIN de seguridad y el confirmar PIN no son iguales
                            mensajeExito.style.display = "none";
                            mensajeCampos.style.display = "block";
                            mensajeCampos.textContent = "El PIN de seguridad y el confirmar PIN no coinciden.";
                        }
                    } else {
                        // Muestra mensaje de error si el PIN de seguridad no es un número de 6 dígitos
                        mensajeExito.style.display = "none";
                        mensajeCampos.style.display = "block";
                        mensajeCampos.textContent = "El PIN de seguridad debe ser un número de 6 dígitos.";
                    }
                } else {
                    // Muestra mensaje de error si el código de tarjeta no es un número de 4 dígitos
                    mensajeExito.style.display = "none";
                    mensajeCampos.style.display = "block";
                    mensajeCampos.textContent = "El código de tarjeta debe ser un número de 4 dígitos.";
                }
            } else {
                // Muestra mensaje de error si el número de tarjeta no es un número de 16 dígitos
                mensajeExito.style.display = "none";
                mensajeCampos.style.display = "block";
                mensajeCampos.textContent = "El número de tarjeta debe ser un número de 16 dígitos.";
            }
        } else {
            // Muestra mensaje de error si no se completaron todos los campos
            mensajeExito.style.display = "none";
            mensajeCampos.style.display = "block";
            mensajeCampos.textContent = "Por favor, complete todos los campos correctamente.";
        }
    });
});
