let infoMessage = document.querySelector(".message")
let countdown = document.getElementById("count")
countdown.style.cursor = "pointer"

countdown.addEventListener("click", () => {
    const countingDown = setInterval(() => {
        countdown.textContent = parseInt(countdown.textContent) -1
        if (parseInt(countdown.textContent) === 0){
            clearInterval(countingDown)
            infoMessage.style.display = "none"
        }
    }, 1000);
})