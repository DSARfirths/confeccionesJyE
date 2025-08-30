document.addEventListener('DOMContentLoaded', () => {
    // --- Lógica para autocompletar el asunto del producto en el formulario ---
    const urlParams = new URLSearchParams(window.location.search);
    const productName = urlParams.get('producto');
    
    const subjectField = document.getElementById('subject');
    const messageField = document.getElementById('message');

    if (productName && subjectField && messageField) {
        subjectField.value = `Cotización para: ${productName}`;
        messageField.value = `Hola, me gustaría solicitar una cotización para el producto "${productName}".\n\nPor favor, bríndenme más información. Gracias.`;
    }

    // --- Lógica para el envío del formulario de contacto ---
    const contactForm = document.getElementById('contact-form');
    const formStatus = document.getElementById('form-status');

    if (contactForm) {
        contactForm.addEventListener('submit', async (e) => {
            e.preventDefault();
            const data = new FormData(contactForm);
            
            try {
                const response = await fetch(contactForm.action, {
                    method: 'POST',
                    body: data,
                    headers: { 'Accept': 'application/json' }
                });

                if (response.ok) {
                    formStatus.textContent = "¡Mensaje enviado con éxito! Te contactaremos pronto.";
                    formStatus.style.color = "green";
                    contactForm.reset();
                } else {
                    const responseData = await response.json();
                    const errorMessage = responseData.errors?.map(err => err.message).join(', ') || "Ocurrió un error.";
                    formStatus.textContent = `Error: ${errorMessage}`;
                    formStatus.style.color = "red";
                }
            } catch (error) {
                formStatus.textContent = "Oops! Hubo un problema al enviar tu formulario.";
                formStatus.style.color = "red";
            }
        });
    }
});