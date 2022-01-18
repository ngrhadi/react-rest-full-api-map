const { parse } = require('pg-protocol');
const pool = require('../../database/db-points');
const queries = require('./query');

const getPoint = (req, res) => {
    pool.query(queries.getPoint, (error, results) => {
        if (error) throw error;
        res.status(200).json(results.rows);
    })
}
 
const getPointById = (req, res) => {
    const id = parseInt(req.params.id);
    pool.query(queries.getPointById, [id], (error, results) => {
        if (error) throw error;
        res.status(200).json(results.rows);
    })
}

const addPoint = (req, res) => {
    const {geom, x, y} = req.body;

    //check
    pool.query(queries.checkCoordinat, [x, y], (error, results) => {
        if (results.rows.length) {
                res.send("coordinat already exists")
        }

        //add user
        pool.query(queries.addPoint, 
            [geom, x, y], 
            (error, results) =>{
                if (error) throw error; 
                res.status(201).send("point has been created")
        })
    })
}

const removePointById = (req, res) => {
    const id = parseInt(req.params.id);
    pool.query(queries.getPointById, [id], (error, results) => {
        const noPoint = !results.rows.length;
        if (noPoint) {
            res.send("point has nothing")
        }

        pool.query(queries.removePoint, [id], (error, results) =>{
            if (error) throw error;
            res.status(200).send('point has been deteled')
        })
    })
}

const updatePointId = (req, res) => {
    const id = parseInt(req.params.id)
    const {x , y} = req.body;

    pool.query(queries.getPointById, [id], (error, results) => {
        const noPoint = !results.rows.length;
        if (noPoint) {
            res.send("point has nothing");
        }

        pool.query(queries.updatePoint, [x, y], (error, results) => {
            if (error) throw error;
            res.status(200).send('users has been updated');
        })
    })

}

module.exports = {
    getPoint,
    getPointById,
    addPoint,
    removePointById,
    updatePointId,
}
