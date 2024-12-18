let numAlAzar = Math.floor(Math.random() * 100) + 1;

let numDeEntrada = document.getElementById('numeroEntrada');
let mensaje = document.getElementById('mensaje');
let intento = document.getElementById('intento');
let intentos = 0;

function chequearResultado() {
    intentos++;
    intento.textContent = intentos
    let numeroIngresado = parseInt (numDeEntrada.value);
    if (numeroIngresado < 1 || numeroIngresado > 100 || isNaN (numeroIngresado)) {
        mensaje.textContent = 'Por favor, introducí un número válido entre 1 y 100.';
        mensaje.style.color = 'white';
        return;
    }

    if (numeroIngresado == numAlAzar) {
        mensaje.textContent = '¡Felicitaciones! ¡Adivinaste el número!';
        mensaje.style.color = 'green';
        numDeEntrada.disabled = true;
    } else if (numeroIngresado < numAlAzar) {
        mensaje.textContent = '¡Más alto! El número es mayor al que dijiste';
        mensaje.style.color = 'red';
    } else {
        mensaje.textContent = '¡Más bajo! El número es menor al que dijiste';
        mensaje.style.color = 'red';
    }
}