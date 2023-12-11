function weather(){
    let quality = document.querySelector("#weather").value
    let output = document.querySelector("#message")

    if (quality >=8 && quality <= 10){
        output.innerHTML = "super"
    }
    else if (quality >=6 && quality <= 7){
        output.innerHTML = "gut"
    }
    else if (quality >=3 && quality <= 5){
        output.innerHTML = "okay"
    }
    else if (quality >= 0 && quality <= 2){
        output.innerHTML = "schlecht"
    }
    else {
        output.innerHTML = "ausßerhalb der Range"
    }
}