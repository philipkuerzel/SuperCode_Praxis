// Arrays 1-1
let infoPerson = ["Dagobert", "Duck", "Reich"]
let infoFriends = ["Tick", "Trick", "Track"]
let infoFood = ["Burger", "Sushi", "Pizza"]

console.log(infoPerson, infoFriends, infoFood);

// Arrays 1-2
console.log(infoPerson[0]);
console.log(infoPerson[1]);
console.log(infoPerson[2]);

console.log(infoFriends[0]);
console.log(infoFriends[1]);
console.log(infoFriends[2]);

console.log(infoFood[0]);
console.log(infoFood[1]);
console.log(infoFood[2]);


// Arrays 1-3
console.log(infoPerson.length);
console.log(infoFriends.length);
console.log(infoFood.length);


// Arrays 1-4
infoPerson.push("Entenhausen")
console.log(infoPerson);
infoFood.push("Lasagne", "Pasta")
console.log(infoFood);


// Arrays 1-5
infoPersonPop = infoPerson.pop()
console.log(infoPersonPop);
console.log(infoPerson);


// Arrays 1-6
infoPersonShift = infoPerson.shift()
console.log(infoPersonShift);
console.log(infoPerson);


// Arrays 1-7
infoFood.unshift("Salat")
console.log(infoFood);
infoPerson.unshift("Max", "Moritz")
console.log(infoPerson);


// Arrays 1-8
let numbers = [23, 54, 75]
console.log(numbers);
let numbersPush = numbers.push(17, 44, 23, 96, 21)
console.log(numbersPush);
console.log(numbers);

numbers.unshift(99,98,97,89,85)
console.log(numbers);

numbers.pop()
numbers.pop()
console.log(numbers);

numbers.shift()
numbers.shift()
console.log(numbers);

