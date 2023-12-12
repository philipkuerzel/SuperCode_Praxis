const text = "Sam is good at codingschool"

let school = text.replace("codingschool", "school")
document.write("<p>"+school+"</p>")

schoolBad = school.replace("good", "bad")
document.write("<p>"+schoolBad+"</p>")

schoolSusi = school.replace("Sam", "Susi")
document.write("<p>"+schoolSusi+"</p>")

schoolTennis = school.replace("school", "tennis")
document.write("<p>"+schoolTennis+"</p>")