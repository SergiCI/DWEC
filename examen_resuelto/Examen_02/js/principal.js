// Nombre y apellidos: Examen Resuelto

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
  article.className = 'tarjeta';
  article.dataset.id = pelicula.id;

  if (!pelicula.disponible) {
    article.classList.add('agotada');
  }

  const h3 = document.createElement('h3');
  h3.textContent = pelicula.titulo;
  article.appendChild(h3);

  const pInfo = document.createElement('p');
  pInfo.textContent = `${pelicula.genero} · ${pelicula.duracion} min`;
  article.appendChild(pInfo);

  const pPrecio = document.createElement('p');
  pPrecio.textContent = `${pelicula.precio} €`;
  article.appendChild(pPrecio);

  const button = document.createElement('button');
  button.className = 'reservar';
  button.type = 'button';
  if (pelicula.disponible) {
    button.textContent = 'Reservar';
  } else {
    button.textContent = 'Agotada';
    button.disabled = true;
  }
  article.appendChild(button);

  return article;
};

// 1.2
const pintarCartelera = (lista) => {
  cartelera.replaceChildren(...lista.map(p => crearTarjeta(p)));
};


// ============================================================
// APARTADO 2 · Filtros y orden
// ============================================================

// 2.1
const filtrarPeliculas = (lista, genero, soloDisponibles) => {
  return lista.filter(pelicula => {
    const coincideGenero = !genero || pelicula.genero === genero;
    const coincideDisponibilidad = !soloDisponibles || pelicula.disponible;
    return coincideGenero && coincideDisponibilidad;
  });
};

// 2.2
const ordenarPeliculas = (lista, criterio) => {
  const copia = [...lista];
  copia.sort((a, b) => {
    if (criterio === 'titulo') {
      return a.titulo.localeCompare(b.titulo);
    } else if (criterio === 'duracion') {
      return a.duracion - b.duracion;
    } else if (criterio === 'precio') {
      return a.precio - b.precio;
    }
    return 0;
  });
  return copia;
};

// 2.3
const actualizarCartelera = () => {
  const genero = formularioFiltros.elements.genero.value;
  const soloDisponibles = formularioFiltros.elements.disponibles.checked;
  const criterio = formularioFiltros.elements.orden.value;

  const filtradas = filtrarPeliculas(peliculas, genero, soloDisponibles);
  const ordenadas = ordenarPeliculas(filtradas, criterio);

  pintarCartelera(ordenadas);

  contador.textContent = `Mostrando ${ordenadas.length} de ${peliculas.length} películas`;
};

// 2.4 · Eventos de los filtros
formularioFiltros.addEventListener('input', () => {
  actualizarCartelera();
});


// ============================================================
// APARTADO 3 · Entradas reservadas
// ============================================================

// 3.1
const anadirReserva = (pelicula) => {
  const existente = reservas.find(reserva => reserva.id === pelicula.id);
  if (existente) {
    existente.cantidad++;
  } else {
    reservas.push({
      id: pelicula.id,
      titulo: pelicula.titulo,
      precio: pelicula.precio,
      cantidad: 1
    });
  }
};

// 3.2
const eliminarReserva = (id) => {
  reservas = reservas.filter(reserva => reserva.id !== id);
};

// 3.3
const calcularTotal = (lista) => {
  return lista.reduce((total, reserva) => total + (reserva.precio * reserva.cantidad), 0);
};

// 3.4
const pintarReservas = () => {
  listaReservas.replaceChildren(...reservas.map(reserva => {
    const li = document.createElement('li');
    const subtotal = reserva.precio * reserva.cantidad;
    li.textContent = `${reserva.titulo} × ${reserva.cantidad} – ${subtotal} €`;

    const btnQuitar = document.createElement('button');
    btnQuitar.className = 'quitar';
    btnQuitar.dataset.id = reserva.id;
    btnQuitar.type = 'button';
    btnQuitar.textContent = '✕';
    li.appendChild(btnQuitar);

    return li;
  }));

  totalReservas.textContent = `Total: ${calcularTotal(reservas)} €`;
};

// 3.5 · Eventos de la cartelera y de la lista de entradas
cartelera.addEventListener('click', (event) => {
  const boton = event.target.closest('.reservar');
  if (!boton) return;
  const tarjeta = boton.closest('.tarjeta');
  if (!tarjeta) return;
  const id = Number(tarjeta.dataset.id);
  const pelicula = peliculas.find(p => p.id === id);
  if (pelicula) {
    anadirReserva(pelicula);
    pintarReservas();
  }
});

listaReservas.addEventListener('click', (event) => {
  const boton = event.target.closest('.quitar');
  if (!boton) return;
  const id = Number(boton.dataset.id);
  eliminarReserva(id);
  pintarReservas();
});


// ============================================================
// APARTADO 4 · Formulario de reserva y validación
// ============================================================

// 4.1
const mostrarError = (campo) => {
  const parrafoError = document.querySelector(`#error-${campo.name}`);
  if (parrafoError) {
    parrafoError.textContent = campo.validationMessage;
  }
  if (campo.validity.valid) {
    campo.classList.remove('con-error');
    return true;
  } else {
    campo.classList.add('con-error');
    return false;
  }
};

// 4.2
const comprobarReglas = () => {
  const inputFecha = formularioReserva.elements.fecha;
  const fechaValor = inputFecha.value;
  const hoy = new Date().toISOString().slice(0, 10);

  if (fechaValor && fechaValor < hoy) {
    inputFecha.setCustomValidity('La fecha no puede ser anterior a hoy');
  } else {
    inputFecha.setCustomValidity('');
  }
};

// 4.3 · Eventos focusout e input del formulario
formularioReserva.addEventListener('focusout', (event) => {
  if (!event.target.matches('input')) return;
  comprobarReglas();
  mostrarError(event.target);
});

formularioReserva.addEventListener('input', (event) => {
  if (!event.target.matches('input')) return;
  if (event.target.classList.contains('con-error')) {
    comprobarReglas();
    mostrarError(event.target);
  }
});

// 4.4 · Evento submit del formulario
formularioReserva.addEventListener('submit', (event) => {
  event.preventDefault();
  mensajeReservas.textContent = '';
  resultado.textContent = '';

  comprobarReglas();

  const campos = Array.from(formularioReserva.elements).filter(campo => campo.matches('input'));
  
  let primerInvalido = null;
  let todoValido = true;

  campos.forEach(campo => {
    const esValido = mostrarError(campo);
    if (!esValido) {
      todoValido = false;
      if (!primerInvalido) {
        primerInvalido = campo;
      }
    }
  });

  if (!todoValido) {
    if (primerInvalido) {
      primerInvalido.focus();
    }
    return;
  }

  if (reservas.length === 0) {
    mensajeReservas.textContent = 'Reserva al menos una entrada';
    return;
  }

  const nombre = formularioReserva.elements.nombre.value;
  const correo = formularioReserva.elements.correo.value;
  const telefono = formularioReserva.elements.telefono.value;
  const fecha = formularioReserva.elements.fecha.value;

  const lineasReservas = reservas.map(r => `- ${r.titulo} × ${r.cantidad}`).join('\n');
  const total = calcularTotal(reservas);

  const textoResumen = `Reserva de ${nombre} (${correo}, ${telefono}) para el ${fecha}\n${lineasReservas}\nTotal: ${total} €`;

  resultado.textContent = textoResumen;

  reservas = [];
  pintarReservas();
  formularioReserva.reset();
});


// ============================================================
// ARRANQUE · al cargar la página (apartados 2.4 y 3.5)
// ============================================================
actualizarCartelera();
pintarReservas();
