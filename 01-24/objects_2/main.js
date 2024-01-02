// this 1-1
console.log("%c this 1-1", "color: red");

let person = {
    vorname: "Anton",
    nachname: "Fish",
    fullName: function () {
        return this.vorname + " " + this.nachname;
    }
};

console.log(person.fullName());

// this 1-2
console.log("%c this 1-2 siehe HTML", "color: red");

let person2 = {
    vorname: 'Anton',
    nachname: 'Fish',
    alter: 34,
    familienstand: 'ledig',
    groesse: '178cm',
    profil: function () {
        return(
            `
            <p>Name: ${this.vorname} ${this.nachname}<br>
            Alter: ${this.alter} Jahre <br>
            Körpergröße: ${this.groesse} <br>
            Familienstand: ${this.familienstand}</p>
            `
        );
}
};

document.getElementById("person").innerHTML = person2.profil();


// this 1-3
console.log("%c this 1-3 siehe HTML", "color: red");

let personFunction = {
    fullName: function () {
        return this.vorname + " " + this.nachname;
    }
};
let personObjekt = {
    vorname: "Anton",
    nachname: "Fish"
};

let anzeigeImHTMLDokument = `<p>${personFunction.fullName.call(personObjekt)}</p>`;
document.getElementById("person").innerHTML = anzeigeImHTMLDokument;



// this 1-4
console.log("%c this 1-4", "color: red");

function fahrrad() {
    console.log(this.name);
}

let name = "Canyon";
let obj1 = { name: "Merida", fahrrad: fahrrad };
let obj2 = { name: "Scott", fahrrad: fahrrad };

this.fahrrad(); // leer
obj1.fahrrad(); // Merida
obj2.fahrrad(); // Scott
