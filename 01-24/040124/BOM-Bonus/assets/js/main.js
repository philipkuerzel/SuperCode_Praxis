let moveCat
let catDirection = 1
let catSpeed = 2 
const cat = document.getElementById("cat")

const catWalk = () => {

    moveCat = setInterval(() => {
        let catPosition = parseInt(cat.style.left) || 0
        catPosition += catDirection * catSpeed
        if (catPosition + cat.width > window.innerWidth || catPosition < 0) {
            turn()
        }
        cat.style.left = `${catPosition}px`
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