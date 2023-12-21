const addElement = () => {
    const inputText = document.getElementById("inputText").value
    const liste = document.getElementById("myList")
    
    if (inputText !== "") {
        const newItem = document.createElement("li")
        newItem.textContent = inputText
        liste.appendChild(newItem)

        document.getElementById("inputText").value = "";
    }
}