const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

/**
 * Get all of the items on the shelf
 */
// router.get('/', (req, res) => {
//     res.sendStatus(200); // For testing only, can be removed
// });
// GET Route to get items 
router.get('/', (req, res) => {
    let sqlText = `SELECT * FROM "item" ORDER BY "id" DESC;`;
    pool.query(sqlText)
        .then((result) => {
            res.send(result.rows);
            console.log(result.rows);

        })
        .catch((error) => {
            console.log('error', error);
            res.sendStatus(500);
        })
}); // END GET Route


/**
 * Add an item for the logged in user to the shelf
 */
router.post('/', async (req, res) => {
    console.log(`in shelf.router.js POST for '/'`);
    const client = await pool.connect();

    try {
        const {
            description,
            imageUrl,
            personId
        } = req.body;
        await client.query('BEGIN')
        await client.query(`INSERT INTO item ("description","image_url","person_id")
        VALUES ($1, $2, $3);`, [description, imageUrl, personId]);

        await client.query('COMMIT')
        res.sendStatus(201);
    } catch (error) {
        await client.query('ROLLBACK')
        console.log('Error post /shelf', error);
        res.sendStatus(500);
    } finally {
        client.release()
    }
});


/**
 * Delete an item if it's something the logged in user added
 */
// router.delete('/:id', (req, res) => {

// });
// DELETE
router.delete('/:id', (req, res) => {
    let reqId = req.params.id;
    console.log('Delete request for id', reqId);
    let sqlText = `DELETE FROM item WHERE id=$1;`;
    console.log(sqlText);

    pool.query(sqlText, [reqId])
        .then((result) => {
            console.log('item deleted');
            res.sendStatus(200);
        })
        .catch((error) => {
            console.log(`Error in deleting ${sqlText}`, error);
            res.sendStatus(500);
        })
})


/**
 * Update an item if it's something the logged in user added
 */
router.put('/:id', (req, res) => {

});


/**
 * Return all users along with the total number of items 
 * they have added to the shelf
 */
router.get('/count', (req, res) => {

});


/**
 * Return a specific item by id
 */
router.get('/:id', (req, res) => {

});

module.exports = router;