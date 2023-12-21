const games = document.getElementById("myList")

const firstGame = games.firstElementChild
const lastGame = games.lastElementChild
const secGame = games.firstElementChild.nextElementSibling
const lastGamePreviousSibling = games.lastElementChild.previousElementSibling

const output = document.querySelector("output")

const buttons = Array.from(document.querySelector("div").children)
console.log(buttons);


buttons[0].addEventListener("click", () => {
    output.innerHTML = firstGame.innerHTML
})

buttons[2].addEventListener("click", () => {
    output.innerHTML = lastGame.innerHTML
})

buttons[4].addEventListener("click", () => {
    output.innerHTML = secGame.innerHTML
})

buttons[6].addEventListener("click", () => {
    output.innerHTML = lastGamePreviousSibling.innerHTML
})

