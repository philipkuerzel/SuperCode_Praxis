

function adult(){
    let age = document.querySelector("#ageInput").value
    let output = document.querySelector(".output")
    
    if (age >= 18){
        output.innerHTML = "Volljährig"
    }
    else {
        output.innerHTML = "Minderjährig"
    }
}