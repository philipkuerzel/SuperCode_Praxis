function highlight(){
    let text = document.querySelector("article")
    let input = document.querySelector("#search-input").value

    text.innerHTML = text.innerText.replaceAll(input, "<span style='background-color: yellow;''>" + input + "</span>")
}