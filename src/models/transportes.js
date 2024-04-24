const mongoose = require('mongoose');

const transportesSchema = new mongoose.Schema({
    razon_social: {
        type: String,
        required: true
    },
    cuit: {
        type: Number,
        required: true,
        default: 0
    },
    domicilio: {
        type: String,
        required: true,
        default: ''
    },
    chofer: {
        type: String,
        required: true,
        default: ''
    },
    patente_chasis: {
        type: String,
        required: true,
        default: ''
    },
    patente_acoplado: {
        type: String,
        required: true,
        default: ''
    }
});

module.exports = mongoose.model('Transportes', transportesSchema, 'transportes');