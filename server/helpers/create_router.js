const express = require ("express");
const ObjectId = require('mongodb').ObjectId;

const createRouter = function(collection) {
    const router = express.Router();

    router.get('/', (res, req) => {
        collection
        .find ()
        .toArray()
        .then((docs)=>rescape.json(docs))
        .catch((err) => {
            console.error(err);
            res.status(500);
            res.json({status:500, error:err});
        });
    });

    return router;
};

module.exports = createRouter;