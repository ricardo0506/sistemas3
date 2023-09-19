// JavaScript para redirigir al hacer clic en "Financiar"
document.querySelector('a[href="financiamientoCampana.html"]').addEventListener('click', function(e) {
    // Evita el comportamiento predeterminado del enlace (navegación)
    e.preventDefault();
    
    // Redirige a la página de financiamientoCampana.html
    window.location.href = 'financiamientoCampana.html';
});

// JavaScript para redirigir al hacer clic en "Atras"
document.querySelector('a[href="busquedaCampana.html"]').addEventListener('click', function(e) {
    // Evita el comportamiento predeterminado del enlace (navegación)
    e.preventDefault();
    
    // Redirige a la página de busquedaCampana.html
    window.location.href = 'busquedaCampana.html';
});
