// loops 1-1
console.log("%c loops 1-1",  "color:red");

for (let i = 1; i <11; i++) {
    console.log("Hello World " + i);
}


// loops 1-2
console.log("%c loops 1-2",  "color:red");

let numArray = []
for (let num = 0; num <=10; num++){
    numArray.push(num);
}
console.log(numArray);


// loops 1-3
console.log("%c loops 1-3",  "color:red");

let counter = 0;
while (counter < 10){
    counter++
    console.log("Hello World " + counter);
}


// loops 1-4
console.log("%c loops 1-4",  "color:red");

let names = ["Georg", "Anass", "Elaine", "Hakan", "Eric", "Kim", "Sergio"]

for (let name of names ) {
    console.log(name);
}


// loops 1-6
console.log("%c loops 1-6",  "color:red");

let letArray = []
for (arr = 1; arr <= 100; arr++) {
    letArray.push("image_" + arr + ".jpg");
}
console.log(letArray);