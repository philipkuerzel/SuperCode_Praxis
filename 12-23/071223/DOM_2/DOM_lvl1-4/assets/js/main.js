document.getElementById("info").innerHTML = "<h1>Hello World</h1><h2>How are you</h2>";
document.getElementById('container').innerHTML = "<p>start of the element</p>"
document.write("end of the element");

function changeText(){
    let userInput = document.getElementById("userInput").value
    console.log(userInput);
    document.getElementById("test").innerHTML = "<h1>Hello h1<h1>";
    document.getElementById("date").innerHTML = Date();
    document.getElementById("inputText").innerHTML = userInput ;
}


