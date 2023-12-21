function changeColor() {
    const boxes = document.querySelectorAll(".card")
    boxes.forEach(box => {
        box.addEventListener("click", () => {
            box.style.backgroundColor = "green"
        });
    })
}