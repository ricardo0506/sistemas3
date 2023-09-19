// JavaScript para la Interfaz del Recaudador

// Función para cerrar sesión
function cerrarSesion() {
    // Aquí puedes realizar las acciones necesarias para cerrar la sesión, como eliminar cookies o redirigir al usuario a la página de inicio de sesión.
    alert("Sesión cerrada exitosamente.");
    window.location.href = "login.html"; // Redirige al usuario a la página de inicio de sesión
  }
  
  // Asignar funciones a los elementos de menú
  document.addEventListener("DOMContentLoaded", function () {
    // Obtener los elementos de menú
    const crearCampanaBtn = document.querySelector("#crearCampanaBtn");
    const gestionarCampanasBtn = document.querySelector("#gestionarCampanasBtn");
    const gestionarPagosBtn = document.querySelector("#gestionarPagosBtn");
    const cerrarSesionBtn = document.querySelector("#cerrarSesionBtn");
  
    // Agregar controladores de eventos a los elementos de menú
    crearCampanaBtn.addEventListener("click", function () {
      // Puedes redirigir al usuario a la página de creación de campaña
      window.location.href = "creacionCampana.html";
    });
  
    gestionarCampanasBtn.addEventListener("click", function () {
      // Puedes redirigir al usuario a la página de gestión de campañas
      window.location.href = "gestionCampanaCreadas.html";
    });
  
    gestionarPagosBtn.addEventListener("click", function () {
      // Puedes redirigir al usuario a la página de gestión de pagos
      window.location.href = "registroCuentasPago.html";
    });
  
    cerrarSesionBtn.addEventListener("click", function () {
      // Llama a la función para cerrar sesión cuando se hace clic en el botón
      cerrarSesion();
    });
  });
  