const tarjetas2 = document.querySelectorAll(".card")
tarjetas2.forEach(function (tarjeta) {
    const img = tarjeta.querySelector("img")
    if (img) {
        img.classList.add("imagen-curso")
    }
});