function showtxt(){
    let listItem = document.querySelector("#mylist").value
    let output = document.querySelector("#masse")

    switch(listItem){
        case "0":
            output.innerHTML = "<b>Brief und Postkarte</b> <br>L: 10 - 23,5 cm B: 7 - 12,5 cm H: bis 1 cm"
            break;
        case "1":
            output.innerHTML = "<b>DHL Paket 2 kg</b> <br>bis 60 x 30 x 15 cm"
            break;
        case "2":
            output.innerHTML = "<b>DHL Paket 5 kg</b> <br>bis 120 x 60 x 60 cm"
            break;
        case "3":
            output.innerHTML = "<b>DHL Paket 10 kg</b> <br>bis 120 x 60 x 60 cm"
            break;
        default:
            output.innerHTML = "<b>Extra große Größe</b>"
            break;
    }
}