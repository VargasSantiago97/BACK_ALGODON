const mongoose = require('mongoose');

const socios = new mongoose.Schema({
    razon_social: {
        type: String,
        required: true
    },
    id: {
        type: String,
        required: true
    },
    porcentaje: {
        type: Number,
        required: true
    }
});

const grupo_retiros = new mongoose.Schema({
    descripcion: {
        type: String,
        required: true
    },
    socios: [socios]
});

module.exports = mongoose.model('Sociedades', grupo_retiros, 'sociedades');