import express from 'express';

const app = express();
app.use(express.static('public'));

app.listen(3000, () => {
    console.log('Server started');
})

app.get('/:page', (req, res) => {
    const page = req.params.page;
    if (req.path === "/") {
        res.sendFile('./public/index.html', { root: import.meta.dirname });
    }
    else {
        res.sendFile(`./public/${page}.html`, { root: import.meta.dirname });
    }
})
