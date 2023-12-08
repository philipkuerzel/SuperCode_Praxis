function getMyAge(){
    const output = document.querySelector(".output")
    const birthday = document.querySelector(".bday").value
    const dateToday = new Date(2023)
    const age = dateToday - birthday
    output.innerHTML = age
}