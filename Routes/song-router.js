import express from 'express';
import SongController from '../Controller/song-controller.js';
const controller = new SongController();

const router = express.Router();

router.get('/api/song', (req, res) => {controller.list(req, res)})
router.get('/api/song/:id([0-9]*)', (req, res) => {controller.get(req, res)})


export { router }