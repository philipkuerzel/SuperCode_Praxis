const myFunction = () => {
    const itemsOfHTML = document.getElementsByClassName("example")
    const itemsOfHTMLArr = Array.from(itemsOfHTML)

    for (items of itemsOfHTMLArr) {
        if(items.style.backgroundColor === ""){
            items.style.backgroundColor = "black"
            items.style.color = "white"
        }else if (items.style.backgroundColor === "black"){
            items.style.backgroundColor = ""
            items.style.color = ""
        }
    }
}