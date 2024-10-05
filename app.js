// Selecciona los elementos del DOM.
const inputRojo = document.getElementById('rojo');   // input range rojo
const inputVerde = document.getElementById('verde');
const inputAzul = document.getElementById('azul');

const textoRojo = document.getElementById('texto-rojo');    // p rojo
const textoVerde = document.getElementById('texto-verde');
const textoAzul = document.getElementById('texto-azul');


// Función para actualizar el color de fondo de la página.
function actualizarColor() {
  // Completa esta función para cambiar el color de fondo.
  // Valores iniciales para definir el color RGB.
  let rojo = inputRojo.value;      //  value="23"
  let verde = inputVerde.value;
  let azul = inputAzul.value;

  // Muestra los valores iniciales en los elementos <p>.
  textoRojo.textContent = rojo;  // <p id="texto-rojo">23</p>
  textoVerde.textContent = verde;
  textoAzul.textContent = azul;

  const colorCaja = document.querySelector("body").style.backgroundColor = `rgb(${rojo}, ${verde}, ${azul})`;
}

// Agrega un event listener para el input de Rojo.
inputRojo.addEventListener('input', (e) => {
  actualizarColor()
});

// Agrega un event listener para el input de Verde.
inputVerde.addEventListener('input', (e) => {
  actualizarColor()
});

// Agrega un event listener para el input de Azul.
inputAzul.addEventListener('input', (e) => {
  actualizarColor()
});

actualizarColor();