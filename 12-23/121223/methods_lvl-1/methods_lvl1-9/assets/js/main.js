const text1 = "Sam is going to codingschool"
const text2 = "Susi"
const text3 = "and"

let A = text1.replace("coding", "").concat(" and to the movie theater")
document.write(A + "</br>")
let B = text1.replace("codingschool", "").concat("movie theater")
document.write(B + "</br>")
let C = text2 +" " + text3 + " "+ text1.replace("is", "are").replace("coding", "")
document.write(C + "</br>")
let D = C.replace("school", "").concat(" the gym and the movie theater")
document.write(D + "</br>")
let E = A.replace("Sam", text2)
document.write(E)