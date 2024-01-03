const checkDay = (day) => new Date(day).getDay() % 6 !== 0 ? "Arbeitstag" : "Weekend";

console.log(checkDay("12.15.2019")); // Weekend
console.log(checkDay("2.16.2001")); // Arbeitstag
console.log(checkDay("2.1.2020")); // Weekend
console.log(checkDay("12.15.2019")); // Weekend
