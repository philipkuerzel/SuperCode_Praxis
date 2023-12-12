function checkPW(){
    let input = document.querySelector("#password").value
    let message = document.querySelector(".message")
    

    input.length >= 8
    ? message.innerHTML = "Welcome to your account"
    : message.innerHTML = "password too short"

}