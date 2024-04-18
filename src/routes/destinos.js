const express = require('express');

const destinosModel = require('../models/destinos');


var route = express.Router();

route.get('/', async function (req, res) {
    try {
        const destinos = await destinosModel.find({});

        return res.json({ destinos });
    } catch (error) {
        console.log('Error', error);
        return res.status(500).json({ message: 'Internal server error' });
    }
});

route.post('/', async function (req, res) {
    try {
        const razon_social = req.body?.razon_social;
        const cuit = req.body?.cuit;
        const condicion_iva = req.body?.condicion_iva;
        const domicilio = req.body?.domicilio;
        const localidad = req.body?.localidad;
        const provincia = req.body?.provincia;
        const telefono = req.body?.telefono;

        if (
            !razon_social ||
            !cuit ||
            !condicion_iva ||
            !domicilio ||
            !localidad ||
            !provincia ||
            !telefono
        ) {
            return res.status(400).json({ message: 'Bad request' });
        }
        const destinos = new destinosModel({
            razon_social,
            cuit,
            condicion_iva,
            domicilio,
            localidad,
            provincia,
            telefono
        });

        const save = await destinos.save();
        return res.status(201).json({ destinos: save });
    } catch (error) {
        console.log('Error', error);
        return res.status(500).json({ message: 'Internal server error' });
    }
});



module.exports = route