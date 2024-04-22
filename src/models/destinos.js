const mongoose = require('mongoose');

const destinosSchema = new mongoose.Schema({
    razon_social: {
        type: String
    },
    cuit: {
        type: Number,
        required: true
    },
    condicion_iva: {
        type: String,
        required: true
    },
    domicilio: {
        type: String,
        required: true
    },
    localidad: {
        type: String,
        required: true
    },
    provincia: {
        type: String,
        required: true
    },
    telefono: {
        type: String,
        required: true
    },
});

module.exports = mongoose.model('Destinos', destinosSchema, 'destinos');