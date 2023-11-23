import express from "express";

const app = express()

app.get('/', (req, res) => {
    res.send('Velkommen til min side');
})

app.get('/about', (req, res) => {
    console.log(req.query);
    res.send('Om os');
})

app.listen(4000,() => {

    console.log('Nu køre serveren med express');
})