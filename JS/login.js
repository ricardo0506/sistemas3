document.addEventListener("DOMContentLoaded", function () {
    const btingresar = document.getElementById("bt-ingresar");
    const usuarioInput = document.getElementById("usuario");
    const tipoDeCuentaSelect = document.getElementById("tipoDeCuenta");
    const contraseñaInput = document.getElementById("contraseña");
    const loginform = document.getElementById("loginform");

    btingresar.addEventListener("click", function () {
        // Evita que el formulario se envíe automáticamente
        event.preventDefault();

        if (usuarioInput.value === "" || contraseñaInput.value === "" || tipoDeCuentaSelect.value === "Tipo de usuario") {
            alert("Por favor, complete todos los campos y seleccione un tipo de usuario.");
        } else {
            const tipoDeCuenta = tipoDeCuentaSelect.value;
            if (
                (tipoDeCuenta === "inversor" &&
                    usuarioInput.value === "admin" &&
                    contraseñaInput.value === "admin") ||
                (tipoDeCuenta === "recaudador" &&
                    usuarioInput.value === "admin" &&
                    contraseñaInput.value === "admin")
            ) {
                loginform.reset();
                if (tipoDeCuenta === "inversor") {
                    window.location.href = "interfazInversor.html";
                } else if (tipoDeCuenta === "recaudador") {
                    window.location.href = "interfazRecaudador.html";
                }
                alert("¡Inicio de sesión exitoso!");
            } else {
                alert("Este usuario no se encuentra registrado");
            }
        }
    });
});
