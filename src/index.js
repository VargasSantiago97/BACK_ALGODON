const express = require('express');
const app = express();
var cors = require('cors')
const mongoose = require('mongoose');

const socios = require('./routes/socios');
const destinos = require('./routes/destinos');

const port = 3000;
const uri = 'mongodb://127.0.0.1:27017/algodon';

app.use(cors());
app.use(express.json());

app.use('/socios', socios);
app.use('/destinos', destinos);

app.get('/', (req, res) => {
    res.send('API');
});


mongoose.connect(uri)
    .then(() => {
        console.log('Connection success');

        app.listen(port, () => {
            console.log(`Server listen on http://localhost:${port}`);
        });
    })
    .catch(error => {
        console.error('Connection fail', error);
    });