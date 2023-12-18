// Filter 1-1

const zahlen = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const geradeZahlen =  zahlen.filter(num => num % 2 === 0);
console.log(geradeZahlen);

const ungeradeZahlen =  zahlen.filter(num => num % 2 !== 0);
console.log(ungeradeZahlen);


// Filter 1-2

const woerter = ["Banane", "Kaktus", "Flausch", "Ente", "Apfel", "Auto", "Giraffe", "Schmetterling", "Krokodil", "Lampe"];
const shortWords = woerter.filter(el => el.length <= 6)
console.log(shortWords);


// Filter 1-3
const numbers = [12, 25, 7, 18, 30, 5];
const smallNumbers = numbers.filter(num => num <= 20)
console.log(smallNumbers);

let doubleNumbers = smallNumbers.map(double)
function double (num) {
    return num * 2
}
console.log(doubleNumbers);



// Filter 1-4
// const heroArr = ["Superman", "Batman", undefined, , "Wonder Woman", "Spider-Man", "Black Widow", "Iron Man", "Thor", "Catwoman", , null];
// console.log(heroArr);
// const hero = heroArr.filter(el => el !== undefined && el !== "empty" && el !== null)
// console.log(hero);

const heroArr = ["Superman", "Batman", undefined, , "Wonder Woman", "Spider-Man", "Black Widow", "Iron Man", "Thor", "Catwoman", , null];
const myHeros = () => {
    let heros = heroArr.filter(char => char != undefined && char != "empty" && char != null)
    console.log(heros);
}
myHeros()