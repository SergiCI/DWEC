document.getElementById("formulario-contacto").addEventListener("submit", function (e) {
    e.preventDefault()
    console.log(document.getElementById("nombre").value)
    console.log(document.getElementById("mensaje").value)
})