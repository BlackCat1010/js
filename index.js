import express from 'express';
express.USER = process.env.USER;

const app = express();
const port = 3000;

console.log("Hello, World! You are running on " + process.platform);
console.log(process.env.USER);

app.get('/', (req, res) => {
    res.sendFile('index.html', { root: './view' });
});

app.get('/bs', (req, res) => {
    res.sendFile('indexbs.html', { root: './view' });
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});

