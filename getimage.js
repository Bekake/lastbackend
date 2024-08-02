const fs = require('fs')
const pool = require('./db');

async function getImage( outputPath) {
    try {
        const client = await pool.connect();
        const result = await client.query(`SELECT pic FROM media WHERE medname = 'Dodge'`);
        const imageData = result.rows[0].pic;
        fs.writeFileSync(outputPath, imageData);
        client.release();
        console.log('Image retrieved and saved successfully');
    } 
    catch (err) {
        console.error('Error retrieving image:', err);
    }
}

const outputPath = './gotim/output.jpg'; 
getImage( outputPath);