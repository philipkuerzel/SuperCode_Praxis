console.log("Start: Warten für 3 Sekunden");

const firstThreeSeconds = setTimeout(() => {
    console.log("Erledigt. Du hast 3 Sekunden verschwendet!");
}, 3000)


let counter = 10
const countingToZero = setInterval(() => {
    if (counter > 0){
        console.log(counter);
        counter--
    }else {
        console.log("Endlich Feierabend!");
        clearInterval(countingToZero)
    }
},1000)