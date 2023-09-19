function validarFormulario() {
    const montoAFinanciar = document.getElementById('montoAFinanciar').value;
    const tipoDeTarjeta = document.getElementById('tipoDeTarjeta').value;
    const codigoDeTarjeta = document.getElementById('codigoDeTarjeta').value;
    const pinDeSeguridad = document.getElementById('pinDeSeguridad').value;

    // Validación de monto a financiar: solo números
    if (!(/^\d+$/.test(montoAFinanciar))) {
        alert('El monto a financiar debe contener solo números.');
        return false;
    }

    // Validación de tipo de tarjeta: debe escogerse una opción
    if (tipoDeTarjeta === '') {
        alert('Seleccione un tipo de tarjeta.');
        return false;
    }

    // Validación de código de tarjeta: debe contener 4 números
    if (!(/^\d{4}$/.test(codigoDeTarjeta))) {
        alert('El código de tarjeta debe contener exactamente 4 números.');
        return false;
    }

    // Validación de PIN de seguridad: debe contener 6 números
    if (!(/^\d{6}$/.test(pinDeSeguridad))) {
        alert('El PIN de seguridad debe contener exactamente 6 números.');
        return false;
    }

    // Si todas las validaciones pasan, muestra el mensaje de éxito
    alert('Su pago ha sido procesado con éxito.');

    // Redirige a campanaSeleccionada.html
    window.location.href = 'campanaSeleccionada.html';

    return true;
}
