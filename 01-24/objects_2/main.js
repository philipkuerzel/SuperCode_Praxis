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

