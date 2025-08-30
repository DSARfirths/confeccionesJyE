document.addEventListener("DOMContentLoaded", () => {
    
    /**
     * FUNCIÓN PARA CARGAR PLANTILLAS HTML (HEADER Y FOOTER)
     * Busca un elemento en el DOM y le inyecta el contenido de una URL.
     * @param {string} selector - El selector CSS del elemento (ej. "#main-header").
     * @param {string} url - La ruta al archivo HTML de la plantilla.
     */
    const loadTemplate = async (selector, url) => {
        try {
            const element = document.querySelector(selector);
            if (!element) return; // No hace nada si el elemento no existe en la página actual

            const response = await fetch(url);
            if (response.ok) {
                element.innerHTML = await response.text();

                // Una vez cargado el header, activamos la lógica del menú móvil
                if (selector === '#main-header') {
                    setupMobileMenu();
                }
            } else {
                console.error(`Error cargando la plantilla desde ${url}: ${response.statusText}`);
            }
        } catch (error) {
            console.error(`No se pudo obtener la plantilla desde ${url}:`, error);
        }
    };
    
    // Cargar Header y Footer en la página
    loadTemplate("#main-header", "templates/header.html");
    loadTemplate("#main-footer", "templates/footer.html");

    /**
     * FUNCIÓN PARA GESTIONAR EL MENÚ MÓVIL (HAMBURGUESA)
     * Se ejecuta después de que el header se ha cargado.
     */
    const setupMobileMenu = () => {
        const menuBtn = document.getElementById('menu-btn');
        const mobileMenu = document.getElementById('mobile-menu');
        const mobileMenuLinks = mobileMenu.querySelectorAll('a');

        if (menuBtn && mobileMenu) {
            // Alterna la visibilidad del menú al hacer clic en el botón
            menuBtn.addEventListener('click', () => {
                mobileMenu.classList.toggle('hidden');
            });

            // Oculta el menú si se hace clic en un enlace (para anclas en la misma página)
            mobileMenuLinks.forEach(link => {
                link.addEventListener('click', () => {
                    mobileMenu.classList.add('hidden');
                });
            });
        }
    };
    
    // Puedes añadir más lógica específica para otras páginas aquí abajo.
    // Por ejemplo, la lógica para el formulario de contacto.
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        // Lógica para manejar el envío del formulario de contacto...
    }
});