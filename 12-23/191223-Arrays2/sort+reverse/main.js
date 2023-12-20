// Arrays sort() 1-1
console.log("%c sort 1-1", "color:red");

let languages = [
    "JavaScript",
    "Python",
    "Java",
    "Ruby",
    "PHP",
    "C++",
    "CSS",
    "C#",
    "Go",
    "C",
    "TypeScript",
    "Swift"
];

const sortierung = () => {
    languagesSort = languages.sort()
    console.log(languagesSort); 
}
sortierung()


// Arrays sort() 1-2
console.log("%c sort 1-2", "color:red");

let languages2 = [
    "JavaScript",
    "Python",
    "Java",
    "Ruby",
    "PHP",
    "C++",
    "CSS",
    "C#",
    "Go",
    "C",
    "TypeScript",
    "Swift"
];

const sortierung2 = () => {
    languagesSort = languages2.sort().reverse()
    console.log(languagesSort); 
}
sortierung2()


// Arrays sort() 2-1
console.log("%c sort 2-1", "color:red");

const reverseString = (words) => {
    let reverseWords =words.split('').reverse().join('');
    console.log(reverseWords);
}

reverseString("Philip")
reverseString("Sergio")
reverseString("Hannah")
reverseString("Regallager")
reverseString("Reliefpfeiler")
reverseString("Rentner")

reverseString("Ella mag alle Bohnen")
reverseString("han nesaH has ennaH")


// Arrays sort() 2-2
console.log("%c sort 2-2", "color:red");

let numArray2 = [36, 324, 122, 62, 98, 88, 99, 1000];

numArray2.sort((a, b) => a-b);
console.log(numArray2);
