let output = document.querySelector(".zeit")
const button = document.querySelector("#btn")


button.addEventListener("click", () => {
    let countToZero = setInterval(() => {
        if (parseInt(output.textContent) > 0) {
            output.textContent = `${parseInt(output.textContent) - 1}%`;
        } else {
            clearInterval(countToZero);
        }
    }, 100);
});