const mongoose = require('mongoose');

const campanasSchema = new mongoose.Schema({
    descripcion: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('Campanas', campanasSchema, 'campanas');