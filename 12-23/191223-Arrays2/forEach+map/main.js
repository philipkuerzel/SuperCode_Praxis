// Arrays forEach() 1-1
console.log("%c Arrays 1-1", "color:red");

let getraenke = [
    "Coca-Cola",
    "Apfelsaft",
    "Pepsi",
    "Traubensaft",
    "Sprite",
    "Orangensaft",
    "Red Bull Energy Drink",
    "Fanta"
]

getraenke = getraenke.sort()
console.log(getraenke);

const myDrinks = () => {
    getraenke.forEach((el) => {
        document.write(el + "<br> ")
    })
}
myDrinks()


// Arrays forEach() 1-3
console.log("%c Arrays 1-3", "color:red");

let array = [
    18,
    16,
    80,
    51,
    47,
    38,
    95,
    42,
    68,
    61,
    34,
    51,
    20,
    17,
    56,
    31,
    100,
    6,
    5,
    30,
    74,
    97,
    28,
    99,
    91,
    27,
    73,
    12,
    92,
    6,
    27,
    71,
    26,
    15,
    78
];

const doubleAndSort = () => {
    let double = array.map(num => num * 2)
    double.sort(function(a,b){
        return a - b
    })

    console.log(double);
}
doubleAndSort()


// Arrays forEach() 1-4
console.log("%c Arrays 1-4", "color:red");

let fahrenheit = [0, 32, 45, 50, 75, 80, 99, 120];

const celcius = () => {
    let tempC = fahrenheit.map(num => Math.round((num -32) / 1.8))
        console.log(tempC) 
}
celcius()


// Arrays forEach() 1-5
console.log("%c Arrays 1-5", "color:red");

let checkNumber = [
    18,
    16,
    80,
    51,
    47,
    38,
    95,
    42,
    68,
    61,
    34,
    51,
    20,
    17,
    56,
    31,
    100,
    6,
    5,
    30,
    74,
    97,
    28,
    99,
    91,
    27,
    73,
    12,
    92,
    6,
    27,
    71,
    26,
    15,
    78
];

let result = checkNumber.map(number => {
    if (number % 3 === 0) {
        return number + 100;
    } else {
        return number;
    }
});
console.log(result);


// Arrays forEach() 1-6
console.log("%c Arrays 1-6", "color:red");

let album = [
    "holidays.jpg",
    "Restaurant.jpg",
    "desktop",
    "rooms.GIF",
    "DOGATBEACH.jpg",
]

let newAlbum = album.map(words => {
    
    let newName = words.split(".")[0].toLowerCase();

    if (words.includes(".")) {
        return newName;
    } else {
        return "invalid";
    }

});

console.log(newAlbum);

