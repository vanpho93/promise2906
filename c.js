// duLieu tu table A, duLieu tu table B 
const queryDB = require('./db');

Promise.race([
    sleep(),
    queryDB('SELECT * FROM "Product" WHERE id = 21', [])    
]).then(x => console.log(x));

function sleep() {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve(), 0);
    });
}
