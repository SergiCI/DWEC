// ==========================================================
// EJER_04.1 · Eventos en JavaScript
// Escribe aquí tus soluciones (módulo ES6).
// - Nombres de variables y funciones en español.
// - Usa addEventListener (no onclick en el HTML).
// ==========================================================

// ---------- Ejercicio 1 · Contador de clics ----------
const botonRestar = document.getElementById('boton-restar');
const botonSumar = document.getElementById('boton-sumar');
const botonReiniciar = document.getElementById('boton-reiniciar');
const valorContador = document.getElementById('valor-contador');

let contador = 0;

function actualizarContador() {
    valorContador.textContent = contador;
    if (contador < 0) {
        valorContador.style.color = '#e53935'; // Rojo si es negativo
    } else {
        valorContador.style.color = ''; // Color por defecto
    }
}

botonSumar.addEventListener('click', () => {
    contador++;
    actualizarContador();
});

botonRestar.addEventListener('click', () => {
    contador--;
    actualizarContador();
});

botonReiniciar.addEventListener('click', () => {
    contador = 0;
    actualizarContador();
});
// ---------- Ejercicio 2 · Tarjeta sensible al ratón ----------
const tarjetaRaton = document.getElementById('tarjeta-raton');
const mensajeRaton = document.getElementById('mensaje-raton');

tarjetaRaton.addEventListener('mouseenter', () => {
    tarjetaRaton.classList.add('activa');
    mensajeRaton.textContent = '¡Estás dentro!';
});

tarjetaRaton.addEventListener('mouseleave', () => {
    tarjetaRaton.classList.remove('activa');
    mensajeRaton.textContent = 'Pasa el ratón por la tarjeta';
});

tarjetaRaton.addEventListener('dblclick', () => {
    tarjetaRaton.textContent = '¡Doble clic!';
});
// ---------- Ejercicio 3 · Espejo de texto ----------
const campoTexto = document.getElementById('campo-texto');
const ecoTexto = document.getElementById('eco-texto');
const caracteresRestantes = document.getElementById('caracteres-restantes');
const maxCaracteres = 30;

campoTexto.addEventListener('input', () => {
    const texto = campoTexto.value;
    const restantes = maxCaracteres - texto.length;

    ecoTexto.textContent = texto;
    caracteresRestantes.textContent = restantes;

    if (restantes <= 5) {
        caracteresRestantes.classList.add('poco');
    } else {
        caracteresRestantes.classList.remove('poco');
    }
});
// ---------- Ejercicio 4 · Mover con el teclado ----------

// ---------- Ejercicio 5 · Paleta de colores ----------
const paleta = document.getElementById('paleta');
const lienzo = document.getElementById('lienzo');
const nombreColor = document.getElementById('nombre-color');

paleta.addEventListener('click', (evento) => {
    const muestra = evento.target.closest('.muestra');
    if (!muestra) return;

    const color = muestra.getAttribute('data-color');
    const nombre = muestra.getAttribute('data-nombre');

    lienzo.style.backgroundColor = color;
    nombreColor.textContent = nombre;
});
// ---------- Ejercicio 6 · Grupo con foco ----------
const grupoContacto = document.getElementById('grupo-contacto');
const mensajeFoco = document.getElementById('mensaje-foco');

// focusin y focusout burbujean, permitiendo delegar el foco desde el fieldset
grupoContacto.addEventListener('focusin', (evento) => {
    if (evento.target.tagName === 'INPUT') {
        grupoContacto.classList.add('activo');
        const placeholder = evento.target.placeholder;
        mensajeFoco.innerHTML = `Editando: <i>${placeholder}</i>`;
    }
});

grupoContacto.addEventListener('focusout', (evento) => {
    // Comprobamos si el nuevo elemento con foco sigue estando dentro del fieldset
    setTimeout(() => {
        if (!grupoContacto.contains(document.activeElement)) {
            grupoContacto.classList.remove('activo');
            mensajeFoco.textContent = 'Ningún campo activo';
        }
    }, 0);
});
// ---------- Ejercicio 7 · Burbuja y captura ----------
const cajaExterna = document.getElementById('caja-externa');
const cajaMedia = document.getElementById('caja-media');
const cajaInterna = document.getElementById('caja-interna');
const botonLimpiarFlujo = document.getElementById('boton-limpiar-flujo');
const registroFlujo = document.getElementById('registro-flujo');

const cajas = [
    { elemento: cajaExterna, nombre: 'Externa' },
    { elemento: cajaMedia, nombre: 'Media' },
    { elemento: cajaInterna, nombre: 'Interna' }
];

function registrarEvento(texto) {
    const li = document.createElement('li');
    li.textContent = texto;
    registroFlujo.appendChild(li);
}

// Registramos escuchadores en fase de captura (true) y burbuja (false / por defecto)
cajas.forEach(({ elemento, nombre }) => {
    // Captura
    elemento.addEventListener('click', () => {
        registrarEvento(`${nombre} (captura)`);
    }, true);

    // Burbuja
    elemento.addEventListener('click', () => {
        registrarEvento(nombre);
    }, false);
});

botonLimpiarFlujo.addEventListener('click', () => {
    registroFlujo.innerHTML = '';
});
// ---------- Ejercicio 8 · Detener y cancelar ----------
const tarjetaProducto = document.getElementById('tarjeta-producto');
const botonComprar = document.getElementById('boton-comprar');
const enlaceInfo = document.getElementById('enlace-info');
const mensajeEstado = document.getElementById('mensaje-estado');

function mostrarMensajeEstado(texto) {
    mensajeEstado.textContent += (mensajeEstado.textContent ? '\n' : '') + texto;
}

tarjetaProducto.addEventListener('click', () => {
    mostrarMensajeEstado('Has pulsado la tarjeta');
});

botonComprar.addEventListener('click', (evento) => {
    // Detenemos la propagación para que el clic no suba hasta la tarjeta
    evento.stopPropagation();
    mostrarMensajeEstado('Producto comprado');
});

enlaceInfo.addEventListener('click', (evento) => {
    // Evitamos la acción por defecto (abrir enlace) y detenemos la propagación
    evento.preventDefault();
    evento.stopPropagation();
    mostrarMensajeEstado('Enlace bloqueado');
});