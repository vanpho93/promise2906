const express = require('express');
const queryDB = require('./db');

const app = express();
app.set('view engine', 'ejs');
app.set('views', './views');
app.use(express.static('public'));

app.get('/', async (req, res) => {
    try {
        const result = await queryDB('SELECT * FROM "Prod"');
        res.send(result.rows);
    } catch(err) {
        res.send(err.toString());
    }   
});

app.listen(3000, () => console.log('Server started!'));