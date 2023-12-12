const A = 'Susi is going to codingschool'
let X = A.slice(0, 4)
document.write("<p>"+X+"</p>")

let Y = A.slice(5, 7)
document.write("<p>"+Y+"</p>")

let C = A.slice(5, 17) + A.slice(-6)
document.write("<p>"+C+"</p>")

let D = A.slice(-6)
document.write("<p>"+D+"</p>")

let V = A.slice(0, 7) + " " + A.slice(-6)
document.write("<p>"+V+"</p>")