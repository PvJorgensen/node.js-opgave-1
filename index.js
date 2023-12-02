import express from 'express';
import { router as SongRouter } from './Routes/song-router.js';
import { router as ArtistRouter } from './Routes/artist-router.js';
import dotenv from 'dotenv';
dotenv.config()
import db from './Config/db.config.js'

db.query(`SELECT title FROM song`, (err, result) => {
    console.log(result);
})


const app = express()
app.use(express.urlencoded({
    extended: true
}))
const port = process.env.PORT;

app.use(SongRouter);
app.use(ArtistRouter);

app.listen(4000,() => {
    console.log(`Serveren kører på port ${port}`);
})