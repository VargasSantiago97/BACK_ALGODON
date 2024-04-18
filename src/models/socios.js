const mongoose = require('mongoose');

const sociosSchema = new mongoose.Schema({
    razon_social: {
        type: String,
        required: true
    },
    cuit: {
        type: Number,
        required: true
    },
    fondo_remito: {
        type: String,
        required: true
    },
    punto_venta: {
        type: Number,
        required: true
    },

});

module.exports = mongoose.model('Socios', sociosSchema, 'socios');