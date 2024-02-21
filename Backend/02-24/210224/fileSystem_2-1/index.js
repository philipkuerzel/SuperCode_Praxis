import fs from 'fs';

const data = JSON.parse(fs.readFileSync('data.json', 'utf8'));

for (let i = 0; i < data.length; i++) {
    fs.writeFileSync("./info.txt", data[i].id + " - " + data[i].title + "\n" + data[i].description +"\n" + "\n", {flag: "a"} ,(err) => {
        if(err) throw err;
    })
}