const text = "Sam is going to codingschool"
let A = text.substring(0,4).toUpperCase() + text.substring(4,16) + text.substring(16,28).replace("coding", "").toUpperCase()
document.write(A + "</br>") // SAM is going to SCHOOL

let B = text.substring(0,4).toLowerCase() + text.substring(4,16).toUpperCase() + text.substring(16,28).replace("coding", "")
document.write(B + "</br>") // sam IS GOING TO school

let C = B.toLowerCase()
document.write(C + "</br>") // sam is going to school

let D = C.split(' ').map(function(word){return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();}) // Satz wird aufgesplittet in mehrere strings und .map geht durch jedes Wort

let E = D.join(' ') // mit .join wird der Satz wieder zusammengefügt 
document.write(E) // Sam Is Going To School