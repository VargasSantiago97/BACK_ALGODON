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

const remitos = new mongoose.Schema({
    descripcion: {
        type: String,
        required: true
    },
    socios: [socios]
});

module.exports = mongoose.model('Remitos', remitos, 'remitos');
/* 
socio		
punto_venta		
numero_remito		
fecha		
origen		
sociedad	(con origen)	
destino		
transporte		
observaciones		
articulos		
kg_origen_bruto	kg_origen_tara	kg_origen_neto
kg_destino_bruto	kg_destino_tara	kg_destino_neto
kg_fibra	kg_semilla	rendimiento
romaneo	parte	recibo */