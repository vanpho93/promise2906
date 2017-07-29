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

function docFile(filename) {
    return new Promise((resolve, reject) => {
        fs.readFile(filename, 'utf8', (err, data) => {
            if (err) return reject(err);
            resolve(data);
        });
    });
}

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

// function queryFromFile(file) {
//     return docFile(file)
//     .then(sql => queryDB(sql, []));
// }

docFile('./a.txt')
.then(sql => { 
    sql += ' WHERE id = $1';
    return queryDB(sql, [21]);
})
.then(result => result.rows[0])
.catch(err => console.log(err.toString()))
.then(x => console.log(x));

// docFile('./a.txt')
// .then(sql => 100)
// .then(x => console.log(x));
