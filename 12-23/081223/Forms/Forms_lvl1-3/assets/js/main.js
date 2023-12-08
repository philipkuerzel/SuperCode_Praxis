function getDifference(){
    const output = document.querySelector(".output")
    const age1 = document.querySelector("#age1").value
    const age2 = document.querySelector("#age2").value
    const difference = age1 - age2
    output.innerHTML += difference
}