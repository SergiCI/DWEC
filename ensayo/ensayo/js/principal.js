// Nombre y apellidos: Sergio Caramazana Ibarlucea

import { tareasIniciales } from './datos.js';

// ============================================================
// Constantes y elementos de la página (ya definidos: no los cambies)
// ============================================================
const ESTADOS = ['porhacer', 'encurso', 'hecha'];
const LIMITE_HORAS = 40;

const formularioTarea = document.querySelector('#formulario-tarea');
const campoHoras = formularioTarea.elements.horas;
const mensajeFormulario = document.querySelector('#mensaje-formulario');
const buscador = document.querySelector('#buscador');
const botonArchivar = document.querySelector('#boton-archivar');
const tablero = document.querySelector('#tablero');
const listaHoras = document.querySelector('#horas-asignatura');
const progreso = document.querySelector('#progreso');

// Referencias exactas a tus <ul> del HTML
const columnas = {
  porhacer: document.querySelector('#col-porhacer'),
  encurso: document.querySelector('#col-encurso'),
  hecha: document.querySelector('#col-hecha')
};

const contadores = {
  porhacer: document.querySelector('#num-porhacer'),
  encurso: document.querySelector('#num-encurso'),
  hecha: document.querySelector('#num-hecha')
};

// Se desactiva la validación del navegador: los mensajes los muestras tú (apartado 1)
formularioTarea.noValidate = true;

// Tareas del tablero. Es una copia: los datos originales no se tocan
let tareas = tareasIniciales.map((tarea) => ({ ...tarea }));

// Repinta todo a partir del array de tareas (ya hecha: la usarás en el apartado 4)
const repintar = () => {
  pintarTablero(buscarTareas(tareas, buscador.value));
  pintarResumen(tareas);
};


// ============================================================
// APARTADO 1 · Formulario y validación
// ============================================================

// 1.1 · Devuelve el texto del error de un campo según su `validity` ('' si es válido)
const mensajeDeError = (campo) => {
  const error = campo.validity;
  if (error.valueMissing) {
    return "Este campo es obligatorio";
  }
  if (error.tooShort) {
    return `Escribe al menos ${campo.minLength} caracteres`;
  }
  if (error.rangeUnderflow || error.rangeOverflow) {
    return `Debe estar entre ${campo.min} y ${campo.max}`;
  }
  if (error.customError) {
    return campo.validationMessage;
  }
  return '';
};

// 1.2 · Muestra u oculta el error de un campo y devuelve si es válido
const validarCampo = (campo) => {
  const errorSmall = campo.nextElementSibling;
  const mensaje = mensajeDeError(campo);
  campo.classList.toggle('invalido', !!mensaje);
  if (errorSmall && errorSmall.classList.contains('error')) {
    errorSmall.textContent = mensaje;
  }
  return !mensaje;
};

// 1.3 · Aplica (o quita) el error personalizado de #horas según el límite de horas pendientes
const comprobarHoras = () => {
  const pendientes = tareas.filter(t => t.estado !== 'hecha').reduce((acc, t) => acc + Number(t.horas), 0);
  const escritas = campoHoras.value.trim() === '' ? 0 : Number(campoHoras.value);
  if (pendientes + escritas > LIMITE_HORAS) {
    campoHoras.setCustomValidity(`Superas el límite de ${LIMITE_HORAS} h pendientes (ahora hay ${pendientes} h)`);
  } else {
    campoHoras.setCustomValidity('');
  }
};

// 1.4 · Deja el formulario como recién cargado
const limpiarFormulario = () => {
  formularioTarea.reset();
  campoHoras.setCustomValidity('');
  formularioTarea.querySelectorAll('input, select').forEach(c => {
    c.classList.remove('invalido');
    const s = c.nextElementSibling;
    if (s && s.classList.contains('error')) s.textContent = '';
  });
  mensajeFormulario.textContent = '';
};

// 1.5 · Eventos del formulario (change, input y keydown)
formularioTarea.addEventListener('change', e => { comprobarHoras(); validarCampo(e.target); });
formularioTarea.addEventListener('input', e => { if (e.target.classList.contains('invalido')) { comprobarHoras(); validarCampo(e.target); } });
formularioTarea.addEventListener('keydown', e => { if (e.key === 'Escape') limpiarFormulario(); });


// ============================================================
// APARTADO 2 · Cálculos con los datos (funciones puras)
// ============================================================

// 2.1 · Tareas cuyo título o asignatura contienen el texto buscado
const buscarTareas = (lista, texto) => {
  const t = texto.trim().toLowerCase();
  if (!t) return [...lista];
  return lista.filter(item => item.titulo.toLowerCase().includes(t) || item.asignatura.toLowerCase().includes(t));
};

// 2.2 · Reparte las tareas en un objeto con una lista por cada estado
const agruparPorEstado = (lista) => {
  const obj = { porhacer: [], encurso: [], hecha: [] };
  lista.forEach(t => { if (obj[t.estado]) obj[t.estado].push(t); });
  return obj;
};

// 2.3 · Suma las horas de cada asignatura, de más a menos horas
const horasPorAsignatura = (lista) => {
  if (!lista || lista.length === 0) return [];
  const obj = {};
  lista.forEach(t => { obj[t.asignatura] = (obj[t.asignatura] || 0) + Number(t.horas); });
  return Object.keys(obj).map(a => ({ asignatura: a, horas: obj[a] }))
    .sort((a, b) => b.horas !== a.horas ? b.horas - a.horas : a.asignatura.localeCompare(b.asignatura));
};


// ============================================================
// APARTADO 3 · Pintar la página
// ============================================================

// 3.1 · Devuelve (sin insertarla) la tarjeta <li> de una tarea
const crearTarjeta = (tarea) => {
  const li = document.createElement('li');
  li.className = `tarjeta prioridad-${tarea.prioridad}`;
  li.dataset.id = tarea.id;

  const strong = document.createElement('strong');
  strong.className = 'titulo';
  strong.textContent = tarea.titulo;

  const span = document.createElement('span');
  span.className = 'meta';
  span.textContent = `${tarea.asignatura} ${tarea.horas} h`;

  li.appendChild(strong);
  li.appendChild(span);

  ['retroceder', 'avanzar'].forEach((accion, idx) => {
    const btn = document.createElement('button');
    btn.type = 'button';
    btn.dataset.accion = accion;
    btn.textContent = idx === 0 ? '←' : '→';
    if ((idx === 0 && tarea.estado === ESTADOS[0]) || (idx === 1 && tarea.estado === ESTADOS[ESTADOS.length - 1])) {
      btn.disabled = true;
    }
    li.appendChild(btn);
  });
  return li;
};

// 3.2 · Reparte las tarjetas de lista en las tres columnas y actualiza los contadores
const pintarTablero = (lista) => {
  ESTADOS.forEach(e => {
    if (columnas[e]) columnas[e].innerHTML = '';
  });
  const agrupadas = agruparPorEstado(lista);
  ESTADOS.forEach(e => {
    if (columnas[e]) {
      agrupadas[e].forEach(t => columnas[e].appendChild(crearTarjeta(t)));
    }
    if (contadores[e]) {
      contadores[e].textContent = agrupadas[e].length;
    }
  });
};

// 3.3 · Pinta el resumen: horas por asignatura y progreso
const pintarResumen = (lista) => {
  if (listaHoras) {
    listaHoras.innerHTML = '';
    horasPorAsignatura(lista).forEach(item => {
      const li = document.createElement('li');
      li.textContent = `${item.asignatura} — ${item.horas} h`;
      listaHoras.appendChild(li);
    });
  }
  const total = lista.length;
  const hechas = lista.filter(t => t.estado === 'hecha').length;
  if (progreso) {
    progreso.textContent = `Hechas: ${hechas} de ${total} (${total > 0 ? Math.round((hechas / total) * 100) : 0}%)`;
  }
};


// ============================================================
// APARTADO 4 · Interacción
// ============================================================

// 4.1 · Mueve una tarea `paso` columnas (+1 avanza, -1 retrocede)
const moverTarea = (id, paso) => {
  const t = tareas.find(item => item.id === Number(id));
  if (!t) return;
  const nuevo = ESTADOS.indexOf(t.estado) + paso;
  if (nuevo >= 0 && nuevo < ESTADOS.length) t.estado = ESTADOS[nuevo];
};

// 4.2 · Añade una tarea nueva al array y la devuelve
const anadirTarea = (datos) => {
  const nueva = {
    id: tareas.length > 0 ? Math.max(...tareas.map(t => t.id)) + 1 : 1,
    titulo: datos.titulo.trim(),
    asignatura: datos.asignatura,
    horas: Number(datos.horas),
    estado: 'porhacer',
    prioridad: datos.prioridad
  };
  tareas.push(nueva);
  return nueva;
};

// 4.3 · Elimina del array las tareas hechas y devuelve cuántas eran
const archivarHechas = () => {
  const cant = tareas.filter(t => t.estado === 'hecha').length;
  if (cant > 0) tareas = tareas.filter(t => t.estado !== 'hecha');
  return cant;
};

// 4.4 · Eventos del tablero, del buscador y del botón «Archivar hechas», y primer pintado
tablero.addEventListener('click', e => {
    const btn = e.target.closest('button[data-accion]');
    const tar = btn?.closest('.tarjeta');
    if (tar) {
        moverTarea(tar.dataset.id, btn.dataset.accion === 'avanzar' ? 1 : -1);
        repintar();
    }
});

// 4.5 · Envío del formulario
formularioTarea.addEventListener('submit', e => {
    e.preventDefault();
    mensajeFormulario.textContent = '';
    comprobarHoras();
    let primero = null, valido = true;
    formularioTarea.querySelectorAll('input, select').forEach(c => {
        if (!validarCampo(c)) { valido = false; if (!primero) primero = c; }
    });
    if (!valido) { primero?.focus(); return; }

    const inputTitulo = formularioTarea.elements.titulo;
    const inputAsignatura = formularioTarea.elements.asignatura;
    const inputPrioridad = formularioTarea.elements.prioridad;

    const titulo = inputTitulo.value.trim();
    anadirTarea({ 
      titulo, 
      asignatura: inputAsignatura.value, 
      horas: campoHoras.value, 
      prioridad: inputPrioridad.value 
    });
    limpiarFormulario();
    repintar();
    mensajeFormulario.textContent = `Tarea añadida: ${titulo}`;
});

buscador.addEventListener('input', repintar);
botonArchivar.addEventListener('click', () => { archivarHechas(); repintar(); });

repintar();