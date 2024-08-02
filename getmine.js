const pool = require('./db');
async function getdata(){
    try {
        let mydata = []
        const users = await pool.query('SELECT * FROM sinov');
        if(users.rows.length>0){
            mydata = users.rows 
            return {
                mydata
            }
        }
        else{
            console.log("Users is not found in database");
        }
        
    } 
    catch (err) {
        console.error('Error fetching data:', err);
    }
}

module.exports = getdata