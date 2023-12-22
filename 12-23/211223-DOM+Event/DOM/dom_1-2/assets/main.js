const myFunction = () => {
    const itemsOfHTML = document.getElementsByClassName("example")

    for (items of itemsOfHTML) {
        if(items.style.backgroundColor === ""){
            items.style.backgroundColor = "black"
            items.style.color = "white"
        }else if (items.style.backgroundColor === "black"){
            items.style.backgroundColor = ""
            items.style.color = ""
        }
    }
}