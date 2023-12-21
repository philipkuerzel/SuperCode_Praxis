const selection = document.querySelector("#select")
const output = document.querySelector(".output")
selection.addEventListener("change", () => {
    if (selection.value !== ""){

        output.innerHTML = "Du hast " + selection.value + " gewählt"
    }else {
        output.innerHTML = "Du musst erst wählen"
    }
})