console.log("Estamos trabajando");

document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('.navbar-nav .nav-link');

    navLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault(); // Evita el comportamiento predeterminado del enlace

            const targetId = this.getAttribute('href'); // Obtiene el ID de la sección destino
            console.log('Clic en', targetId);
            const targetElement = document.querySelector(targetId); // Selecciona la sección destino

            if (targetElement) {
                // Desplaza suavemente hacia la sección
                targetElement.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
});

//Botón ir arriba

// JavaScript para mostrar/ocultar y hacer scroll al principio
document.addEventListener('DOMContentLoaded', function() {
    const irArribaBtn = document.getElementById("irArribaBtn");

    // Mostrar el botón cuando el usuario hace scroll hacia abajo
    window.onscroll = function() {
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            irArribaBtn.style.display = "block";
        } else {
            irArribaBtn.style.display = "none";
        }
    };

    // Hacer scroll suavemente al principio al hacer clic en el botón
    irArribaBtn.addEventListener('click', function() {
        document.body.scrollTop = 0; // Para navegadores Safari
        document.documentElement.scrollTop = 0; // Para otros navegadores
        // O puedes usar scrollIntoView con comportamiento suave:
        // document.documentElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
});