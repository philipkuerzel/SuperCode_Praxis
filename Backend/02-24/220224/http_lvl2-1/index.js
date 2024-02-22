import fs from 'fs';
import http from 'http';

const sendFile = (path, res) => {
    fs.readFile(path,(err, data) => {   
        if (err){
            res.writeHead(500);
            res.end("Server Error")
        }
        else {
            res.end(data);
    }
})
}

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        sendFile( "./public/index.html", res)
    }
    else {
        sendFile(`./public${req.url}`, res)
    }
})

server.listen(3000, () => {
    console.log("listening on http://localhost:3000")
})