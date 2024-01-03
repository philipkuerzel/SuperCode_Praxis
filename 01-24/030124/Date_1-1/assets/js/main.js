const date1 = new Date("September 2, 2019 09:00:00")
const date2 = new Date(0)
const date3 = new Date(31556908800)
const date4 = new Date(86400000)

let div = document.createElement("div")
document.body.appendChild(div)
div.innerHTML = `<p>${date1} = new Date("September 2, 2019 09:00:00") </p>  ${date2} = new Date(0) <p> ${date3} = new Date(31556908800)</p> ${date4} = new Date(86400000)`