const express = require('express');
const app = express();
var cors = require('cors')
const mongoose = require('mongoose');

const articulos = require('./routes/articulos');
const campanas = require('./routes/campanas');
const destinos = require('./routes/destinos');
const establecimientos = require('./routes/establecimientos');
const grupo_retiros = require('./routes/grupo_retiros');
const remitos = require('./routes/remitos');
const sociedades = require('./routes/sociedades');
const socios = require('./routes/socios');
const transportes = require('./routes/transportes');

const port = 3000;
const uri = 'mongodb://127.0.0.1:27017/algodon';

app.use(cors());
app.use(express.json());

app.use('/api/articulos', articulos);
app.use('/api/campanas', campanas);
app.use('/api/destinos', destinos);
app.use('/api/establecimientos', establecimientos);
app.use('/api/grupo_retiros', grupo_retiros);
app.use('/api/remitos', remitos);
app.use('/api/sociedades', sociedades);
app.use('/api/socios', socios);
app.use('/api/transportes', transportes);


app.get('/', (req, res) => {
    res.json({version: "1.0.0", api: "back_algodon"});
});

app.get('*', (req, res) => {
    res.json({version: "1.0.0", api: "back_algodon"});
});



// Conexión a la base de datos
async function createConnectionMongoDB() {
    await mongoose.connect(uri, {
        authSource: "admin",
        user: "",
        pass: ""
    });
    /* 
    await mongoose.connect(uri, {
        authSource: "admin",
        user: "admin",
        pass: "1!NorteSemillas"
    }); */
}
createConnectionMongoDB()


app.listen(port, () => {
    console.log(`Server listen on http://localhost:${port}`);
});