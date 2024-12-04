// script.js
document.addEventListener('scroll', () => {
    const scrollPosition = window.scrollY; // Posición de desplazamiento actual
    const windowHeight = window.innerHeight; // Altura de la ventana del navegador
    const documentHeight = document.body.scrollHeight; // Altura total del documento

    // Calcula el porcentaje de desplazamiento
    const scrollPercentage = scrollPosition / (documentHeight - windowHeight);

    // Colores iniciales y finales
    const startColor = [173, 216, 230]; // Azul más claro: LightBlue (RGB: #add8e6)
    const endColor = [255, 255, 255]; // Blanco (RGB: #ffffff)

    // Interpolación del color basado en el porcentaje de desplazamiento
    const newColor = startColor.map((start, index) => {
        return Math.round(start + (endColor[index] - start) * scrollPercentage);
    });

    // Cambia el fondo de la página
    document.body.style.background = `rgb(${newColor[0]}, ${newColor[1]}, ${newColor[2]})`;
});