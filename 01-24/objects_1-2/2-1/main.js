// Objects 2-1
console.log("%c Objects 2-1", "color: red");

let edelMetallPreise = [
    { name: "Gold", preiseGramEuro: 42.91, veraenderung: "+0.12%" },
    { name: "Silber", preiseGramEuro: 0.51, veraenderung: "+1.02%" },
    { name: "Platin", preiseGramEuro: 25.74, veraenderung: "+0.41%" },
    { name: "Palladium", preiseGramEuro: 50.93, veraenderung: "0.00%" },
    { name: "Rhodium", preiseGramEuro: 160.12, veraenderung: "-0.10%" },
    { name: "Iridium", preiseGramEuro: 42.84, veraenderung: "0.00%" },
    { name: "Ruthenium", preiseGramEuro: 7.36, veraenderung: "0.00%" },
    { name: "Rhenium", preiseGramEuro: 37.22, veraenderung: "-0.53%" },
    { name: "Osmium", preiseGramEuro: 11.54, veraenderung: "0.00%" }
];

let edelMetallNames = []
edelMetallPreise.forEach((el) => {  // forEach
    edelMetallNames.push(el.name)
})
console.log(edelMetallNames);

let edelMetallNamesMap = edelMetallPreise.map(el => el.name) // map
console.log(edelMetallNamesMap);


let edelMetallPreiseGram = []
edelMetallPreise.forEach((el) => {             // forEach
    edelMetallPreiseGram.push(el.preiseGramEuro)
})
console.log(edelMetallPreiseGram);

let edelMetallPreiseMap = edelMetallPreise.map(el => el.preiseGramEuro) // map
console.log(edelMetallPreiseMap);


let edelMetallVeränderung = []
edelMetallPreise.forEach((el) => {          // forEach
    edelMetallVeränderung.push(el.veraenderung)
})
console.log(edelMetallVeränderung);

let edelMetallVeränderungMap = edelMetallPreise.map(el => el.veraenderung) // map
console.log(edelMetallVeränderungMap);

console.log(edelMetallPreise.filter(p => p.preiseGramEuro > 50));


        // Tabelle erstellen
let table = document.createElement("table");
    table.setAttribute("border", "5");

    
    let tablehead = document.createElement("thead");
    let headerRow = document.createElement("tr");
    ["Name", "Preis pro Gramm (Euro)", "Veränderung"].forEach(headerText => {
        let th = document.createElement("th");
        th.textContent = headerText;
        headerRow.appendChild(th);
    });
    tablehead.appendChild(headerRow);
    table.appendChild(tablehead);

    
    let tbody = document.createElement("tbody");
    edelMetallPreise.forEach(edelMetall => {
        let row = document.createElement("tr");

        let cellName = document.createElement("td");
        cellName.textContent = edelMetall.name;
        row.appendChild(cellName);

        let cellPreis = document.createElement("td");
        cellPreis.textContent = edelMetall.preiseGramEuro.toFixed(2);
        cellPreis.style.textAlign = "center"
        row.appendChild(cellPreis);

        let cellVeraenderung = document.createElement("td");
        cellVeraenderung.textContent = edelMetall.veraenderung;
        cellVeraenderung.style.textAlign = "center"
        row.appendChild(cellVeraenderung);

        tbody.appendChild(row);
    });
    table.appendChild(tbody);

    
    document.body.appendChild(table);