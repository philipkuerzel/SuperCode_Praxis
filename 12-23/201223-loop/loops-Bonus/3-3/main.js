// loops Bonus 3-3
console.log("%c loops Bonus 3-3", "color:red");
console.log("siehe HTML");

const loopMe = () => {
    const input = document.getElementById("input").value;
    word = "";
    if (input == 0){
        document.getElementById("output").innerHTML = "Bitte gib eine Zahl größer als 0 ein.";
    }
    else if(input % 2 == 0) {
        for (i = 1; i <= input ; i++){
            word += "o";
        }
        document.getElementById("output").innerHTML = "L" + word + "p";
    } 
    else if (input % 2 !== 0) {
            for (let i = 1; i <= input; i++) {
                if (i % 2 == 0) {
                    word += "0";
                } else {
                    word += "o";
                }
            }
        document.getElementById("output").innerHTML = "L" + word + "p";
    }
}




