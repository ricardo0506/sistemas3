document.addEventListener("DOMContentLoaded", function () {
    const campañas = [
        {
            id: "camp1",
            nombre: "Medio ambiente",
            descripcion: "Ayuda al medio ambiente y ecología mundial.",
            fecha: "22/02/2023",
            recaudado: "$5,000",
            vistas: "500",
            estatus: "Activa"
        },
        {
            id: "camp2",
            nombre: "Fe en la música",
            descripcion: "Ayuda a los niños apasionados con la música.",
            fecha: "02/05/2023",
            recaudado: "$3,500",
            vistas: "165",
            estatus: "Inactiva"
        },
        {
            id: "camp3",
            nombre: "Robótica experta",
            descripcion: "Creación de modelo avanzado de robot asistente.",
            fecha: "06/03/2023",
            recaudado: "$8,200",
            vistas: "800",
            estatus: "Activa"
        }
    ];

    // Función para mostrar detalles de una campaña al hacer clic
    function mostrarDetalles(id) {
        const campaña = campañas.find(c => c.id === id);
        if (campaña) {
            document.getElementById("totalRecaudado").innerHTML = `<p>Total recaudado: ${campaña.recaudado}</p>`;
            document.getElementById("vistasCampaña").innerHTML = `<p>Vistas de campaña: ${campaña.vistas}</p>`;
            document.getElementById("estatusCampaña").innerHTML = `<p>Estatus de campaña: ${campaña.estatus}</p>`;
        }
    }

    // Agregar evento clic a cada recuadro de campaña
    campañas.forEach(campaña => {
        const campDiv = document.getElementById(campaña.id);
        campDiv.addEventListener("click", () => mostrarDetalles(campaña.id));
    });

    // Manejo del botón "Siguiente"
    const siguienteBtn = document.getElementById("siguienteBtn");
    siguienteBtn.addEventListener("click", function (e) {
        e.preventDefault();
        // Aquí puedes agregar lógica para cargar más campañas o realizar otra acción al hacer clic en "Siguiente"
        alert("No posee mas campañas en el sistema.");
    });
});
