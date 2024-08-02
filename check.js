const pool = require('./db');
const urin = require('./inum')
urin(["user1", "1"]).then(mes => {
    console.log(mes.gotten);
})

