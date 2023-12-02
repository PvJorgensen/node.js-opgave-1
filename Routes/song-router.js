import express from 'express';

const router = express.Router();

router.get('/sangbog', (req, res) => {
    res.status(200).send('Velkommen til sangbogen')
})

export { router }