const fs = require('fs')
const pool = require('./db');
/*
const filepath = './forpic/dodge.jpg'
const fname = 'Dodge'

const filedata = fs.readFileSync(filepath)

console.log(fname);
console.log(filedata);

pool.query(`INSERT INTO media (name, data) VALUES ('${fname}', '${filedata}')`, (err, res) => {
    if (err) {
        console.error(err);
    } else {
        console.log('File inserted successfully');
    }
    pool.end();
});
*/
async function storeImage(imagePath) {
    try {
        const imageData = fs.readFileSync(imagePath);

        const client = await pool.connect();
        await client.query('INSERT INTO media (medname, pic) VALUES ($1, $2)', ['Dodge',imageData]);
        client.release();

        console.log('Image stored successfully');
    } 
    catch (err) {
        console.error('Error storing image:', err);
    }
}
const filepath = './forpic/dodge.jpg'
storeImage(filepath)