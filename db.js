const pg = require('pg');
const fs = require('fs');

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

// const queryFromFile = async (file) => {
//     const sql = await docFile(file);
//     const result = await queryDB(sql, []);
//     return result;
// }

// queryFromFile('./a.txt')
// .then(result => console.log(result.rows))
// .catch(err => console.log(err.toString()));

module.exports = queryDB;
