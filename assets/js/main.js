document.addEventListener("DOMContentLoaded", () => {
    
    /**
     * FUNCIÓN PARA CARGAR PLANTILLAS HTML (HEADER Y FOOTER)
     */
    const loadTemplate = async (selector, url) => {
        try {
            const element = document.querySelector(selector);
            if (!element) return;

            const response = await fetch(url);
            if (response.ok) {
                element.innerHTML = await response.text();

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
     */
    const setupMobileMenu = () => {
        const menuBtn = document.getElementById('menu-btn');
        const mobileMenu = document.getElementById('mobile-menu');
        const mobileMenuLinks = mobileMenu.querySelectorAll('a');

        if (menuBtn && mobileMenu) {
            menuBtn.addEventListener('click', () => {
                mobileMenu.classList.toggle('hidden');
            });
            mobileMenuLinks.forEach(link => {
                link.addEventListener('click', () => {
                    mobileMenu.classList.add('hidden');
                });
            });
        }
    };
    
    // ===================================================================
    // LÓGICA ESPECÍFICA PARA LA PÁGINA DE PRODUCTOS (`uniformes-escolares.html`)
    // ¡ESTA ES LA PARTE QUE FALTABA EN TU ARCHIVO!
    // ===================================================================
    const colegioSelector = document.getElementById('colegio-selector');
    const productDisplay = document.getElementById('product-display');

    if (colegioSelector && productDisplay) {
        
        // Cargar el mensaje inicial
        productDisplay.innerHTML = '<p class="text-center text-gray-600 mt-8">Por favor, selecciona un colegio para ver sus uniformes.</p>';
        
        // Escuchar cambios en el selector de colegios
        colegioSelector.addEventListener('change', (event) => {
            const colegioKey = event.target.value;
            // Verificamos que la clave exista en nuestro objeto "colegios" de productos.js
            if (colegioKey && typeof colegios !== 'undefined' && colegios[colegioKey]) {
                renderProducts(colegioKey);
            } else {
                productDisplay.innerHTML = '<p class="text-center text-gray-600 mt-8">Por favor, selecciona un colegio para ver sus uniformes.</p>';
            }
        });

        /**
         * FUNCIÓN PARA DIBUJAR LOS PRODUCTOS DE UN COLEGIO SELECCIONADO
         * @param {string} colegioKey - La clave del colegio (ej. "san-miguel").
         */
        const renderProducts = (colegioKey) => {
            const colegio = colegios[colegioKey];
            productDisplay.innerHTML = ''; // Limpiar el contenedor

            // Banner de descuento
            const discountBanner = `
                <div class="bg-gray-50 border-l-4 border-brand-yellow text-black p-6 rounded-r-lg my-12">
                    <h3 class="text-xl font-bold">🌟 ¡Ahorra 5% con el Paquete Completo!</h3>
                    <p class="mt-2">Al cotizar ambos conjuntos (Gala y Ed. Física) obtienes un descuento especial en tu pedido final.</p>
                </div>
            `;
            productDisplay.innerHTML += discountBanner;

            // Iterar sobre los uniformes (gala, fisica, etc.)
            for (const key in colegio.uniformes) {
                const uniforme = colegio.uniformes[key];
                let prendasHTML = '';

                // Crear el HTML para cada prenda del uniforme
                uniforme.prendas.forEach(prenda => {
                    const productoURL = encodeURIComponent(`${colegio.nombre} - ${prenda.nombre}`);
                    
                    prendasHTML += `
                        <div class="bg-white rounded-lg shadow-md overflow-hidden transform hover:-translate-y-2 transition-transform duration-300 flex flex-col">
                            <img src="${prenda.img}" alt="${prenda.nombre}" class="w-full h-56 object-cover bg-gray-200">
                            <div class="p-4 flex-grow flex flex-col">
                                <h3 class="text-lg font-bold">${prenda.nombre}</h3>
                                <p class="text-gray-600 mt-1 flex-grow">${prenda.desc}</p>
                                <a href="contacto.html?producto=${productoURL}" class="bg-black text-white font-bold py-2 px-4 rounded-md hover:bg-gray-800 transition duration-300 mt-4 text-center">
                                    Cotizar
                                </a>
                            </div>
                        </div>
                    `;
                });

                // Añadir la sección completa del uniforme al display
                productDisplay.innerHTML += `
                    <section class="mb-16">
                        <h2 class="text-3xl font-bold text-center mb-8">${uniforme.nombre}</h2>
                        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                            ${prendasHTML}
                        </div>
                    </section>
                `;
            }
        };
    }
});