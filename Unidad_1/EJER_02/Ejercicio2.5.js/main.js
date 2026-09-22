// Importamos las funciones del archivo gestorUsuarios
import {crearPerfil,mostrarPerfil} from "./gestorUsuarios.js";

const usuarios = [crearPerfil("Sergio","sergio@educastur.es","19"),crearPerfil("Pablo","Pablo@educastur.es","25")]

usuarios.forEach(usuario => {
    mostrarPerfil(usuario)
});