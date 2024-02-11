function scrollToContent(event) {
    // Evitar que el enlace recargue la página
    event.preventDefault();

    // Obtener el ID del acordeón desde el atributo data-target del enlace
    var accordionId = event.target.getAttribute('data-bs-target');

    // Obtener el elemento del acordeón
    var accordionElement = document.querySelector(accordionId);

    // Abrir el acordeón
    $(accordionElement).collapse('show');

    // Calcular la posición del acordeón en la página
    var accordionRect = accordionElement.getBoundingClientRect();
    var scrollPosition = accordionRect.top + window.pageYOffset - (window.innerHeight / 2);

    // Desplazar la página para que el acordeón quede centrado verticalmente
    window.scrollTo({ top: scrollPosition, behavior: 'smooth' });


}