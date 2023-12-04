import db from '../Config/db.config.js';

class SongModel {

    constructor() { }



    list = (req, res) => {
        return new Promise((resolve, reject) => {
            const orderBy = req.query.orderBy || 's.id'
            const dir = req.query.dir || 'ASC'
            const limit = req.query.limit ? `LIIMIT ${req.query.limit}` : '';
            const sql = `SELECT s.id, s.title, a.name AS artist
                            FROM song s 
                            JOIN artist a
                            ON s.artist_id = a.id
                            ORDER BY ${orderBy} ${dir}
                            ${limit}`
            db.query(sql, (err, result) => {
                if(err) {
                   rejsect(err); 
                } else {
                    resolve(result);
                }
            })
            
        })

}

get = (req, res) => {
    return new Promise((resolve, reject) => {
        const sql = `SELECT s.id, s.title, s.content, s.artist_id, 
                        a.name AS artist, s.created
                        FROM song s 
                        JOIN artist a
                        ON s.artist_id = a.id
                        WHERE s.id = ?`
        db.query(sql, [req.params.id], (err, result) => {
            if(err) {
               reject(err); 
            } else {
                resolve(...result);
            }
        })
        
    })

}
}

export default SongModel; 