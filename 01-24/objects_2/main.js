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
console.log("%c this 1-2", "color: red");

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