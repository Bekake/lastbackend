const pool = require('./db');
const getmine = require('./getmine')

async function insert(myall){
    try{
        let gotten = []
        const myres = await pool.query(`UPDATE sinov SET username = '${myall[0]}', password = '${myall[1]}'`)
        if(myres.rowCount == 0){
            await pool.query(`INSERT INTO sinov (username, password) VALUES ($1, $2)`, [myall[0], myall[1]])
        }
        const myresult = await getmine()
        gotten = myresult.mydata
        return {
            gotten
        }
    }
    catch(err){
        console.log(err);
    }
}

module.exports = insert