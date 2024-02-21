import fs from 'fs';


const checkAndAdd = (text) => {
    fs.access("./unterordner", fs.constants.F_OK, (err) => {
        // check if the subfolder exists
        if (err) {
            // create subfolder if it doesn´t exist
            fs.mkdir("./unterordner", (err) => {
                if (err) {
                    console.error(err);
                    return;
                }console.log("Folder created");
                // write text to file, take (parameter) and add a new line
                fs.writeFile("./unterordner/file.txt", text + "\n", (err) => {
                    if (err) {
                        console.error(err);
                        return;
                    }
                    console.log("File created and text written!");
                });
            });
        } else {
            // if subfolder exists, write text to the file
            fs.writeFile("./unterordner/file.txt", text + "\n", { flag: "a" }, (err) => {
                if (err) {
                    console.error(err);
                    return;
                }
                console.log("Text added to the existing file!");
            });
        }
    });
};

checkAndAdd("tests ohne ende")