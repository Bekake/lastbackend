const res = require('express/lib/response');
const pool = require('./db');

async function exam(){
    try{
        let result = []
        result = await pool.query(`INSERT INTO example VALUES('Anothername')`)
    }
    catch(err){
        console.log(err);
    }
}

exam()