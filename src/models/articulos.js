const mongoose = require('mongoose');

const articulosSchema = new mongoose.Schema({
    codigo: {
        type: String,
        required: true
    },
    unidad_medida: {
        type: String,
        required: true
    },
    descripcion: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('Articulos', articulosSchema, 'articulos');