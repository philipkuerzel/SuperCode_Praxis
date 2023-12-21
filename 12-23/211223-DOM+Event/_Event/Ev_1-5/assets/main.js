const zaehler = document.getElementById("clickMe")
let Anzahl = 0
zaehler.addEventListener("click", () => {
    Anzahl++
    zaehler.innerHTML = "click me: " + Anzahl
})