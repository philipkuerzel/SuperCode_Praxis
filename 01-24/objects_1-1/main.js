// Objects lvl 1_2
console.log("%c Objects lvl 1_2", "color:red ");

const person = {
    name: "Max",
    alter: 25,
    sagNameAlter: () => {
        alert(`Hallo mein Name ist ${person.name} und ich bin ${person.alter} Jahre alt`)
    }
}
console.log(person.name);
console.log(person.alter);
// person.sagNameAlter()

// Objects lvl 1_4
console.log("%c Objects lvl 1_4", "color:red ");
let unsereHaustiere = [
    {
        tiertyp: "Katze",

        names: [
            "Gipsy",
            "Nala",
            "Dinky"
        ]
    },
    {
        tiertyp: "Hunde",
        names: [
            "Knöpfchen",
            "Pinselchen",
            "Droopy"
        ]
    }
];

console.log(unsereHaustiere[0].names);
console.log(unsereHaustiere[0].names[1]);
console.log(unsereHaustiere[1].names);
console.log(unsereHaustiere[1].names[2]);

unsereHaustiere[1].names = ["Balu", "Spike"]
console.log(unsereHaustiere[1].names);



// Objects lvl 1_5
console.log("%c Objects lvl 1_5", "color:red");

let unserLager = {
    schreibtisch: {
        schublade: "Hefter"
    },
    schrank: {
        "Obere Schublade": {
            Ordner1: "Dokumente",
            Ordner2: "Geheimnisse"
        },
        "Untere Schublade": "Cola"
    }
};

console.log(unserLager.schrank["Obere Schublade"].Ordner2);
console.log(unserLager.schrank["Untere Schublade"]);
console.log(unserLager.schreibtisch.schublade);


// Objects lvl 1_6
console.log("%c Objects lvl 1_6", "color:red ");

let myMusic = [
    {
        kunstler: "The Beatles",
        title: "Abbey Road",
        release_jahr: 1969,
        formate: ["LP", "CD", "MC", "Download"],
        gold: true
    },
    {
        kunstler: "Pink Floyd",
        title: "Dark Side of the Moon",
        release_jahr: 1978,
        formate: ["CS", "CD", "LP", "Download"],
        gold: true
    },
    {
        kunstler: "Led Zeppelin",
        title: "Led Zeppelin IV",
        release_jahr: 1971,
        formate: ["CS", "LP", "Download"],
        gold: true
    },
    {
        kunstler: "Metallica",
        title: "Kill ’Em All und Ride the Lightning",
        release_jahr: 1983,
        formate: ["LP", "CD", "MC", "Download"],
        gold: true
    }
];

myMusic.push({kunstler: "Eminem", title: "Lose Yourself", release_jahr: 2002, formate:["LP", "CD", "Download"], gold:true})
console.log(myMusic);

console.log(myMusic[0].kunstler);
console.log(myMusic[1].formate[3]);
console.log(myMusic[1].gold);
console.log(`${myMusic[2].release_jahr} und ${myMusic[3].release_jahr}`);
console.log(myMusic[3].formate[2]);
console.log(myMusic[3].title.slice(17, 22));
console.log(myMusic[2].title.slice(-2));
console.log(myMusic[1].kunstler.slice(-5));


// Objects lvl 1_7
console.log("%c Objects lvl 1_7 siehe HTML", "color:red ");

myMusic.forEach((el) => {
    document.write(`${el.kunstler}<br>`);
    document.write(`${el.title}<br>`);
    document.write(`${el.formate}<br><br>`);
})
document.write("<br>")
document.write("BONUS <br><br>")

myMusic.filter(year => year.release_jahr < 1975).forEach((el) => {
    document.write(`${el.kunstler}<br>`);
    document.write(`${el.title}<br>`);
    document.write(`${el.formate}<br><br>`);
}) 


// Objects lvl 1_8
console.log("%c Objects lvl 1_8", "color:red ");

let studentData = [
    {
        name: "Alex",
        age: 23,
        coop: false,
        address: {
            street: "Don Valley Business Park",
            city: "Toronto",
            postalCode: "ONM3C3E5"
        },
        emails: ["alex69@gmail.com", "alex123@yahoo.com"]
    },
    {
        name: "Sandra",
        age: 22,
        coop: true,
        address: {
            street: "34 Lawrence Ave",
            city: "Toronto",
            postalCode: "ONM3C0E5"
        },
        emails: ["sandra@gmail.com", "sandra@yahoo.com"]
    }
];

console.log(studentData);

studentData.forEach((el) => {
    console.log(el.name);
    console.log(el.coop);
    console.log(el.emails);
    console.log(el.address.city);
})

// alternativ für die Städte außerhalb forEach
console.log("%c alternative für die Städte außerhalb forEach", "color: green");

console.log(studentData.map(x => x.address.city));