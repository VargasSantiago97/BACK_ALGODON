const mongoose = require('mongoose');

const establecimientosSchema = new mongoose.Schema({
    descripcion: {
        type: String,
        required: true,
        default: ''
    },
    id_sociedad: {
        type: String,
        required: true
    },
    id_campana: {
        type: String,
        required: true
    },
    hectareas: {
        type: Number,
        required: true,
        default: 1
    },
});

module.exports = mongoose.model('Establecimientos', establecimientosSchema, 'establecimientos');