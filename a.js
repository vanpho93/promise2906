const fs = require('fs');

function docFile(filename) {
    return new Promise((resolve, reject) => {
        fs.readFile(filename, 'utf8', (err, data) => {
            if (err) return reject(err);
            resolve(data);
        });
    });
}

docFile('./a. txt')
.then(data => console.log(data))
.catch(err => console.log(err.toString()));
