const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const pool = require('./db');
const app = express();
const PORT = 5000;
const adding = require('./adddata')
const inum = require('./inum')
app.use(cors());
app.use(bodyParser.json());

let mydata = []
app.post('/send', async (req, res) => { 
    try{
        await adding(req.body.user).then(result =>{
            mydata = [result.gotten[0].username, result.gotten[0].password] 
        })
    }
    catch(error){
        console.log("Error is", error);
    }
    res.send('data sent succesfully')
})
app.post('/umu', async (req, res) => {
    try{
        await inum(req.body.tonext).then( result => {
            console.log(result);
        })
    }
    catch(error){
        console.log(error);
    }
    res.send('Succesfully')
})
app.get('/data', (req, res)=> {
    res.send(mydata)
})
app.get('/', (req, res) => {
    res.send(mydata);
});
process.on('SIGINT', () => {
    console.log('Closing database connections...');
    pool.end(() => {
        console.log('Database connections closed.');
        process.exit(0);
    });
});
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
