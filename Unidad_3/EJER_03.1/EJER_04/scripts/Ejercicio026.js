const infos = document.querySelectorAll(".card .info")
infos.forEach(function(info) {
    const duracionP = document.createElement("p")
    duracionP.textContent = "Duracion: 20 horas "
    duracionP.classList.add("duracion")
    info.appendChild(duracionP)
})