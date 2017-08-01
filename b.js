const pg = require('pg');

const pool = new pg.Pool({
    host: 'localhost',
    port: 5432,
    database: 'NODE2906',
    password: 'khoapham',
    max: 5,
    idleTimeoutMillis: 1000,
    user: 'postgres'
});

function queryDB(sql, arrayData) {
    return new Promise((resolve, reject) => {
        pool.connect((err, client, done) => {
            if (err) return reject(err);
            client.query(sql, arrayData, (errQuery, result) => {
                done();
                if (errQuery) return reject(errQuery);
                resolve(result);
            });
        });
    });
}

// queryDB('SELECT * FROM "Prduct"', [])
// .then(
//     result => result.rows,
//     err => []
// )
// .then(kq => console.log(kq));

// queryDB('SELECT * FROM "Prduct"', [])
// .then(result => result.rows)
// .catch(err => [])
// .then(kq => console.log(kq));

// Promise.resolve(queryDB('SELECT * FROM "Product"'))
// .then(a => console.log(a.rows));

Promise.reject(100)
.catch(a => console.log(a));
