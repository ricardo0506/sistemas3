document.addEventListener("DOMContentLoaded", function () {
    const cerrarSesionButton = document.getElementById("cerrarSesion");

    cerrarSesionButton.addEventListener("click", function (event) {
        const confirmarCerrarSesion = confirm("¿Estás seguro de que deseas cerrar sesión?");
        if (!confirmarCerrarSesion) {
            event.preventDefault();
        } else {
            // Redirigir al usuario a la página de inicio de sesión (login.html)
            window.location.href = "login.html";
        }
    });
});
