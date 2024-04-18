const mongoose = require('mongoose');

const transportesSchema = new mongoose.Schema({
    razon_social: {
        type: String,
        required: true
    },
    cuit: {
        type: Number,
        required: true
    },
    domicilio: {
        type: String,
        required: true
    },
    chofer: {
        type: String,
        required: true
    },
    patente_chasis: {
        type: String,
        required: true
    },
    patente_acoplado: {
        type: String,
        required: true
    },
});

module.exports = mongoose.model('Transportes', transportesSchema, 'transportes');