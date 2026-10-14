document.querySelectorAll(".card").forEach(card => {
    if (card.querySelector(".categoria").textContent === "Desarrollo Web") {
        card.style.backgroundColor = "#f0f0f0"
    }
})