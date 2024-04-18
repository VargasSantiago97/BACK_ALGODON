const mongoose = require('mongoose');

const establecimientosSchema = new mongoose.Schema({
    descripcion: {
        type: String,
        required: true
    },
    id_sociedad: {
        type: String,
        required: true
    },
    hectareas: {
        type: Number,
        required: true
    },
});

module.exports = mongoose.model('Establecimientos', establecimientosSchema, 'establecimientos');