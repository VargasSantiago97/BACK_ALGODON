const mongoose = require('mongoose');

const socios = new mongoose.Schema({
    razon_social: {
        type: String,
        required: true
    },
    id: {
        type: String,
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

module.exports = mongoose.model('Grupo_retiros', grupo_retiros, 'grupo_retiros');