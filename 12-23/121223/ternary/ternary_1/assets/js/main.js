function checkAge(){
    let age = document.querySelector("#age").value
    let output = document.querySelector(".output")
    console.log(age);
    age >= 18
    ? output.innerHTML = "Volljährig"
    : output.innerHTML = "Minderjährig"
}