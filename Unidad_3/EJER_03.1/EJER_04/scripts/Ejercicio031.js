const tarjetas = document.querySelectorAll(".card")
tarjetas.forEach(function(tarjeta) {
    const h2 = tarjeta.querySelector("h2")
    if (h2 && h2.textContent.includes("React")) {
        const pOculto = tarjeta.querySelector(".oculto")
        if (pOculto) {
            pOculto.textContent += "(¡Oferta especial!)"
        }
    }
})