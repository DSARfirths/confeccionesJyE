/**
 * BASE DE DATOS DE PRODUCTOS
 * Este objeto contiene toda la información de los uniformes escolares,
 * organizada por colegio. Cuando necesites añadir un nuevo colegio o
 * modificar una prenda, solo tienes que editar este archivo.
 */
const colegios = {
    // Clave única para el colegio (sin espacios ni caracteres especiales)
    "san-miguel": {
        // Nombre completo que se mostrará al usuario
        nombre: "Colegio San Miguel",
        uniformes: {
            gala: {
                nombre: "Uniforme de Gala",
                prendas: [
                    { 
                        nombre: "Camisa Blanca de Gala", 
                        desc: "100% Algodón 20 al 1 azulado, máxima frescura.", 
                        img: "assets/images/uniformes/san-miguel-camisa-gala.jpg" 
                    },
                    { 
                        nombre: "Pantalón Plomo", 
                        desc: "Tela de gabardina resistente para el uso diario.", 
                        img: "assets/images/uniformes/san-miguel-pantalon-gala.jpg" 
                    },
                    { 
                        nombre: "Falda Ploma Tableada", 
                        desc: "Diseño clásico con tela de gabardina duradera.", 
                        img: "assets/images/uniformes/san-miguel-falda-gala.jpg" 
                    }
                ]
            },
            fisica: {
                nombre: "Uniforme de Educación Física",
                prendas: [
                    { 
                        nombre: "Polo Deportivo Blanco", 
                        desc: "100% Algodón 20 a 1 reactivo peinado, no se encoge.", 
                        img: "assets/images/uniformes/san-miguel-polo-deporte.jpg" 
                    },
                    { 
                        nombre: "Short Azul Marino", 
                        desc: "Tela deportiva ligera y de secado rápido.", 
                        img: "assets/images/uniformes/san-miguel-short-deporte.jpg" 
                    },
                    { 
                        nombre: "Casaca de Buzo", 
                        desc: "Algodón perchado, ideal para proteger del frío.", 
                        img: "assets/images/uniformes/san-miguel-casaca-deporte.jpg" 
                    }
                ]
            }
        }
    },

    "santa-rosa": {
        nombre: "Colegio Santa Rosa",
        uniformes: {
            gala: {
                nombre: "Uniforme de Gala",
                prendas: [
                    { 
                        nombre: "Blusa Blanca con Insignia", 
                        desc: "100% Algodón 20 al 1 azulado, con bordado institucional.", 
                        img: "assets/images/uniformes/santa-rosa-blusa-gala.jpg" 
                    },
                    { 
                        nombre: "Falda a Cuadros", 
                        desc: "Diseño tableado oficial del colegio.", 
                        img: "assets/images/uniformes/santa-rosa-falda-gala.jpg" 
                    }
                ]
            },
            fisica: {
                nombre: "Uniforme Deportivo",
                prendas: [
                    { 
                        nombre: "Polo Celeste Institucional", 
                        desc: "Algodón reactivo peinado para colores duraderos.", 
                        img: "assets/images/uniformes/santa-rosa-polo-deporte.jpg" 
                    },
                    { 
                        nombre: "Buzo Completo", 
                        desc: "Conjunto de polera y pantalón en material deportivo.", 
                        img: "assets/images/uniformes/santa-rosa-buzo-deporte.jpg" 
                    }
                ]
            }
        }
    }
    
    // Puedes añadir más colegios aquí...
};