function greaterThan(){
    event.preventDefault()
    let age = document.getElementById("input").value >= 18
    let output = document.querySelector(".output")
    
    if (age === true){
        output.innerHTML = "Ja, Du kannst Shisha rauchen"
    }
    else {
        output.innerHTML = "Du darfst noch nicht Shisha rauchen"
    }
}