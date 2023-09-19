document.addEventListener("DOMContentLoaded", function () {
    // Obtener los botones de tipo de usuario
    const tipoUsuarioButtons = document.querySelectorAll(".tipo-usuario");

    // Manejar el clic en los botones de tipo de usuario
    tipoUsuarioButtons.forEach(function (button) {
        button.addEventListener("click", function () {
            // Eliminar la clase "seleccionado" de todos los botones
            tipoUsuarioButtons.forEach(function (btn) {
                btn.classList.remove("seleccionado");
            });

            // Agregar la clase "seleccionado" al botón clicado
            this.classList.add("seleccionado");
        });
    });

    // Manejar el clic en el botón "Registrarse"
    const registrarseButton = document.querySelector(".registrarse");
    registrarseButton.addEventListener("click", function (event) {
        event.preventDefault(); // Prevenir el envío del formulario

        // Verificar si se ha seleccionado un tipo de usuario
        const tipoUsuarioSeleccionado = document.querySelector(".tipo-usuario.seleccionado");

        if (!tipoUsuarioSeleccionado) {
            alert("Por favor, selecciona un tipo de usuario.");
            return;
        }

        // Validar otros campos (nombre, apellido, etc.) según tus necesidades
        const nombreInput = document.querySelector("input[name='Nombre']");
        const apellidoInput = document.querySelector("input[name='Apellido']");
        const fechaNacimientoInput = document.querySelector("input[name='Fecha de nacimiento']");
        const correoInput = document.querySelector("input[name='Correo']");
        const contraseñaInput = document.querySelector("input[name='Contraseña']");

        if (!nombreInput.value || !apellidoInput.value || !fechaNacimientoInput.value || !correoInput.value || !contraseñaInput.value) {
            alert("Por favor, completa todos los campos.");
            return;
        }

        // Simulación de registro exitoso (puedes reemplazar esto con tu lógica real de registro)
        alert("¡Registro exitoso!");

        // Redirigir al usuario a la página de inicio de sesión después del registro exitoso
        window.location.href = "login.html";
    });
});
