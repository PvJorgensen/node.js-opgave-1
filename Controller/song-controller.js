import Songmodel from '../Model/song-model.js';

const model = new Songmodel();


class SongController {

    constructor() {}


    list = async (req, res) => {
        const result = await model.list(req, res)
        res.json(result);
    }

    get = async (req, res) => {
        const result = await model.get(req, res)
        res.json(result);
    }
}

export default SongController; 