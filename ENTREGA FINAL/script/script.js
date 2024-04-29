// Obtener referencia al contenedor del slider
const slider = document.querySelector('.slider');

// Obtener referencia a los botones de navegación
const leftButton = document.querySelector('.arrow .left');
const rightButton = document.querySelector('.arrow .right');

// Función para desplazar los elementos hacia la izquierda
function slideLeft() {
    // Obtener el ancho de un elemento de producto
    const productWidth = slider.querySelector('.product').offsetWidth;
    // Desplazar el slider hacia la izquierda
    slider.scrollLeft -= productWidth + 20; // 20px de espacio entre productos
}

// Función para desplazar los elementos hacia la derecha
function slideRight() {
    // Obtener el ancho de un elemento de producto
    const productWidth = slider.querySelector('.product').offsetWidth;
    // Desplazar el slider hacia la derecha
    slider.scrollLeft += productWidth + 20; // 20px de espacio entre productos
}

// Asignar eventos a los botones de navegación
leftButton.addEventListener('click', slideLeft);
rightButton.addEventListener('click', slideRight);
