let productos = [];
let idSiguiente = 1;
let filtroTexto = "";

const formulario = document.getElementById("formulario-compra");
const buscador = document.getElementById("buscador");
const lista = document.getElementById("lista");
const totalP = document.getElementById("total");

const acciones = {
    sumar: (id) => {
        const producto = productos.find(p => p.id === id);
        if (producto) producto.unidades++;
        pintar();
    },
    restar: (id) => {
        const producto = productos.find(p => p.id === id);
        if (producto && producto.unidades > 1) {
            producto.unidades--;
        }
        pintar();
    },
    borrar: (id) => {
        productos = productos.filter(p => p.id !== id);
        pintar();
    }
};

const pintar = () => {
    const productosFiltrados = productos.filter(p =>
        p.nombre.toLowerCase().includes(filtroTexto.toLowerCase())
    );

    lista.innerHTML = productosFiltrados.map(p => `
    <li>
      ${p.nombre} - ${p.precio.toFixed(2)} € - ${p.unidades} ud(s) 
      (Subtotal: ${(p.precio * p.unidades).toFixed(2)} €)
      <button data-accion="restar" data-id="${p.id}">-</button>
      <button data-accion="sumar" data-id="${p.id}">+</button>
      <button data-accion="borrar" data-id="${p.id}">Borrar</button>
    </li>
  `).join("");

    const totalGeneral = productos.reduce((acc, p) => acc + (p.precio * p.unidades), 0);
    totalP.textContent = `Total: ${totalGeneral.toFixed(2)} €`;
};

formulario.addEventListener("submit", (e) => {
    e.preventDefault();
    const nombre = formulario.elements.producto.value.trim();
    const precio = formulario.elements.precio.valueAsNumber;
    const unidades = formulario.elements.unidades.valueAsNumber;

    const existente = productos.find(p => p.nombre.toLowerCase() === nombre.toLowerCase());

    if (existente) {
        existente.unidades += unidades;
    } else {
        productos.push({
            id: idSiguiente++,
            nombre,
            precio,
            unidades
        });
    }

    formulario.reset();
    formulario.elements.producto.focus();
    pintar();
});

lista.addEventListener("click", (e) => {
    const boton = e.target.closest("button");
    if (!boton) return;

    const accion = boton.dataset.accion;
    const id = Number(boton.dataset.id);

    if (acciones[accion]) {
        acciones[accion](id);
    }
});

buscador.addEventListener("input", (e) => {
    filtroTexto = e.target.value;
    pintar();
});

formulario.addEventListener("focusin", (e) => {
    if (e.target.tagName === "INPUT") {
        e.target.classList.add("activo");
    }
});

formulario.addEventListener("focusout", (e) => {
    if (e.target.tagName === "INPUT") {
        e.target.classList.remove("activo");
    }
});