// loops Bonus 3-4
console.log("%c loops Bonus 3-4", "color:red");
console.log("siehe HTML");

const countMe = () => {
    const maxNumber = document.querySelector("#maxNum").value
    const firstNum = document.querySelector("#firstNum").value
    const secNum = document.querySelector("#secNum").value

    let sum = 0;
    
    for (let i = 0; i < maxNumber; i ++) {
        if (i % firstNum === 0 || i % secNum === 0){
            sum += i;
        }
    }

    const result = document.querySelector(".output")
    result.innerHTML = `${sum}`
}

