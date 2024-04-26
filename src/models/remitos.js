const mongoose = require('mongoose');

const socios = new mongoose.Schema({
    _id: {
        type: String,
        required: true
    },
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
    }
});
const campanas = new mongoose.Schema({
    _id: {
        type: String,
        required: true
    },
    descripcion: {
        type: String,
        required: true
    }
});
const establecimientos = new mongoose.Schema({
    descripcion: {
        type: String,
        required: true
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
        required: true
    }
});
const destinos = new mongoose.Schema({
    _id: {
        type: String,
        required: true
    },
    razon_social: {
        type: String,
        required: true
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
const transportes = new mongoose.Schema({
    _id: {
        type: String,
        required: true
    },
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
    }
});
const articulos = new mongoose.Schema({
    _id: {
        type: String,
        required: true
    },
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


const remitos = new mongoose.Schema({
    socio: socios,
    campana: campanas,
    punto_venta: {
        type: Number,
        required: true,
        default: 0
    },
    numero_remito: {
        type: Number,
        required: true,
        default: 0
    },
    fecha: {
        type: Date,
        required: true,
        default: new Date()
    },
    origen: establecimientos,
    destino: destinos,		
    transporte: transportes,		
    observaciones: {
        type: String,
        required: false,
        default: ""
    },
    articulos: articulos,		
    cantidad: {
        type: Number,
        required: true,
        default: 1
    },		
    kg_origen_bruto: {
        type: Number,
        required: false,
        default: 0
    },
    kg_origen_tara: {
        type: Number,
        required: false,
        default: 0
    },
    kg_origen_neto: {
        type: Number,
        required: false,
        default: 0
    },
    kg_destino_bruto: {
        type: Number,
        required: false,
        default: 0
    },
    kg_destino_tara: {
        type: Number,
        required: false,
        default: 0
    },
    kg_destino_neto: {
        type: Number,
        required: false,
        default: 0
    },
    kg_fibra: {
        type: Number,
        required: false,
        default: 0
    },
    kg_semilla: {
        type: Number,
        required: false,
        default: 0
    },
    rendimiento: {
        type: Number,
        required: false,
        default: 0
    },
    romaneo: {
        type: String,
        required: false,
        default: ''
    },
    parte: {
        type: String,
        required: false,
        default: ""
    },
    recibo: {
        type: String,
        required: false,
        default: ""
    }
});

module.exports = mongoose.model('Remitos', remitos, 'remitos');