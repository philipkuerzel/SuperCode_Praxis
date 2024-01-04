let moveCat
let catDirection = 1
let catSpeed = 2 
const cat = document.getElementById("cat")

const catWalk = () => {

    moveCat = setInterval(() => {
        let currentPosition = parseInt(cat.style.left) || 0
        currentPosition += catDirection * catSpeed
        if (currentPosition + cat.width > window.innerWidth || currentPosition < 0) {
            turn()
        }
        cat.style.left = `${currentPosition}px`
    }, 20)
}

const pause = () => {
    clearInterval(moveCat)
}

const turn = () => {
    catDirection *= -1
    cat.style.transform = (catDirection === 1) ? "scaleX(1)" : "scaleX(-1)"
}

const increaseCatSpeed = () => {
    catSpeed += 3
}