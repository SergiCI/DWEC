// Nombre y apellidos: Sergio Caramazana Ibarlucea

import { peliculas } from './datos.js';

// ============================================================
// Elementos de la página (ya seleccionados: no los cambies)
// ============================================================
const formularioFiltros = document.querySelector('#formulario-filtros');
const cartelera = document.querySelector('#cartelera');
const contador = document.querySelector('#contador');
const listaReservas = document.querySelector('#lista-reservas');
const totalReservas = document.querySelector('#total-reservas');
const mensajeReservas = document.querySelector('#mensaje-reservas');
const formularioReserva = document.querySelector('#formulario-reserva');
const resultado = document.querySelector('#resultado');

// Se desactiva la validación del navegador: los mensajes los muestras tú (apartado 4)
formularioReserva.noValidate = true;

// Entradas reservadas (apartado 3)
let reservas = [];


// ============================================================
// APARTADO 1 · La cartelera
// ============================================================

// 1.1
const crearTarjeta = (pelicula) => {
  const article = document.createElement('article');
  article.className = `tarjeta`;
  article.dataset.id = pelicula.id;

  const titulo = document.createElement('h3');
  titulo.className = 'titulo';
  titulo.textContent = pelicula.titulo;

  const p = document.createElement('p');
  p.className = 'p';
  p.textContent = `${pelicula.genero} ${pelicula.duracion} h ${pelicula.precio} €`;

  article.appendChild(titulo);
  article.appendChild(p);

  ['reservar', 'agotada'].forEach((accion, idx) => {
    const btn = document.createElement('button');
    btn.type = 'button';
    btn.dataset.accion = accion;
    btn.textContent = idx === 0 ? '←' : '→';
    if ((idx === 0 && pelicula.disponible === Disponible[0]) || (idx === 1 && pelicula.Disponible === Disponible[Disponible.length - 1])) {
      btn.disabled = true;
    }
    if (!pelicula.disponible) {
      tarjeta.addClassName("agotada")
    }
    if (tarjeta) {

    }
    tarjeta.append(titulo, genero, duracion, precio);
  });
  return tarjeta;
};

// 1.2
const pintarCartelera = (lista) => {
  cartelera.replaceChildren();
  
  Disponible.forEach(e => {
    if (columnas[e]) columnas[e].createElement = '';
  });
  Disponible.forEach(e => {
    if (columnas[e]) {
      e.forEach(t => columnas[e].appendChild(crearTarjeta(t)));
    }
    if (contadores[e]) {
      contadores[e].textContent = e.length;
    }
  });
};


// ============================================================
// APARTADO 2 · Filtros y orden
// ============================================================

// 2.1
const filtrarPeliculas = (lista, genero, soloDisponibles) => {
  formularioFiltros.genero.trim().toLowerCase();

  if (formularioFiltros === '') {
    return [...lista]
  }

  return lista.filter(pelicula => {
    pelicula.genero.toLowerCase().includes(formularioFiltros) &&
      pelicula.soloDisponibles === true
  })
};

// 2.2
const ordenarPeliculas = (lista, criterio) => {
  lista.forEach(peliculas => {
    if (!peliculas[pelicula.titulo]) {
      pelicula.push(peliculas)
    }
  });
};

// 2.3
const actualizarCartelera = () => {
  pintarCartelera()
};

// 2.4 · Eventos de los filtros
formularioFiltros.addEventListener(actualizarCartelera())
actualizarCartelera()


// ============================================================
// APARTADO 3 · Entradas reservadas
// ============================================================

// 3.1
const anadirReserva = (pelicula) => {
  // TU CÓDIGO AQUÍ
};

// 3.2
const eliminarReserva = (id) => {
  // TU CÓDIGO AQUÍ
};

// 3.3
const calcularTotal = (lista) => {
  // TU CÓDIGO AQUÍ
};

// 3.4
const pintarReservas = () => {
  // TU CÓDIGO AQUÍ
};

// 3.5 · Eventos de la cartelera y de la lista de entradas
// TU CÓDIGO AQUÍ


// ============================================================
// APARTADO 4 · Formulario de reserva y validación
// ============================================================

// 4.1
const mostrarError = (campo) => {
  const error = campo.validity;
  if (error.valueMissing) {
    return "Este campo es obligatorio";
  }
  if (error.tooShort) {
    return `Escribe al menos ${campo.minLength} caracteres`;
  }
  if (error.patternMismatch) {
    return `Debe tener exactamente ${campo}`;
  }
  if (error.customError) {
    return campo.validationMessage;
  }
  return '';
};

// 4.2
const comprobarReglas = () => {
  const fecha=Date.campo.fecha

  if (fecha>actualDate) {
    fecha.setCustmoValidity(
      `La fecha no puede ser anterior a hoy`
    )
  }else if(fecha === ''){
    fecha.setCustmoValidity('')
  }else{
    fecha.setCustmoValidity('')
  }
};

// 4.3 · Eventos focusout e input del formulario
formularioReserva.addEventListener('focusout', (evento) => {
  if (!campo.matches('input, select')) return;

  comprobarReglas()
  mostrarError()
})

// 4.4 · Evento submit del formulario
formularioTarea.addEventListener('submit', e => {
    e.preventDefault();
    mensajeFormulario.textContent = '';
    let primero = null, valido = true;
    formularioTarea.querySelectorAll('input, select').forEach(c => {
        if (!validarCampo(c)) { valido = false; if (!primero) primero = c; }
    });
    if (!valido) { primero?.focus(); return; }

    const inputTitulo = formularioPelicula.elements.titulo;
    const inputGenero = formularioPelicula.elements.genero;
    const inputPrioridad = formularioPelicula.elements.prioridad;

    const titulo = inputTitulo.value.trim();
    anadirReserva({ 
      titulo, 
      genero: inputGenero.value, 
      horas: campoHoras.value, 
      
    });
    limpiarFormulario();
    repintar();
    mensajeFormulario.textContent = `Tarea añadida: ${titulo}`;
});


// ============================================================
// ARRANQUE · al cargar la página (apartados 2.4 y 3.5)
// ============================================================
formularioFiltros.addEventListener(actualizarCartelera())
actualizarCartelera()