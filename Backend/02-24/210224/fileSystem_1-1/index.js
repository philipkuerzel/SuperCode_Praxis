import { constants } from 'buffer';
import fs from 'fs';

// Textdatei mit Inhalt erstellen
fs.writeFile('./blog1.txt', 'Ich bin ein Webdeveloper.', (err) => {
    if (err) {
        console.error(err);
        return
    }
    console.log('File written successfully');
})

fs.writeFile('./blog2.txt', 'beliebiger Text ' , (err) => {
        if (err) {
            console.error(err);
            return
        }
        console.log('File written successfully');
    })


fs.access('./assets', constants.F_OK, (err) => {
    
    !err
        ? fs.rmdir('./assets', (err) => {
            if (err) {
                console.error(err);
                return;
            }
            console.log('Folder deleted successfully');
        })
        : fs.mkdir('./assets', (err) => {
            if (err) {
                console.error(err);
                return;
            }
            console.log('Folder created successfully');
        });
});



fs.access('./delete.txt', constants.F_OK, (err) => {
    if (!err) {
        fs.unlink('./delete.txt', (err) => {
            if (err) {
                console.error(err);
                return;
            }
            console.log('File deleted successfully');
        })}
        else {
            fs.writeFile('./delete.txt', 'deleteText', (err) => {
                if (err) {
                    console.error(err);
                    return;
                }
                console.log('File written successfully');
            });
        }
    })

fs.writeFile('./Hello.txt', 'Salut', (err) => {
    if (err) {
        console.error(err);
        return
    }
    console.log('File written successfully');
})

fs.rename('./Hello.txt', './HelloWorld.txt', (err) => {
    if (err) {
        console.error(err);
        return
    }
    console.log('File renamed successfully');
})