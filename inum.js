const pool = require('./db');
const getum = require('./getum')

async function add(myall){
    try{
        let gotten = []
        await pool.query(`INSERT INTO umumiy (usname, mycode) VALUES ($1, $2)`, [myall[0], myall[1]])
        const myresult = await getum()
        gotten = myresult.mydata
        return {
            gotten
        }
    }
    catch(err){
        console.log(err);
    }
}

module.exports = add