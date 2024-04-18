const express = require('express');

const sociosModel = require('../models/socios');


var route = express.Router();

route.get('/', async function (req, res) {
    try {
        const socios = await sociosModel.find({});

        return res.json({ socios });
    } catch (error) {
        console.log('Error', error);
        return res.status(500).json({ message: err.message || 'Internal server error' });
    }
});

route.get('/:id', async function (req, res) {
    const id = req.params.id;
    try {
        const data = await sociosModel.findById(id);

        if (!data) res.status(404).send({ message: "No encontrado " + id });
        else res.send(data);

    } catch (err) {
        res
            .status(500)
            .send({ message: err.message || "Error al buscar el producto con id=" + id });
    };
});

route.post('/', async function (req, res) {
    try {
        const razon_social = req.body?.razon_social;
        const cuit = req.body?.cuit;
        const fondo_remito = req.body?.fondo_remito;
        const punto_venta = req.body?.punto_venta;

        if (!razon_social || !cuit || !fondo_remito || !punto_venta) {
            return res.status(400).json({ message: 'Bad request' });
        }

        const data = await sociosModel.create(req.body);
        return res.status(201).json(data);
    } catch (error) {
        console.log('Error', error);
        return res.status(500).json({ message: error.message || 'Internal server error' });
    }
});

route.put('/:id', async function (req, res) {
    if (!req.body) {
        return res.status(400).send({
            message: "Data to update can not be empty!"
        });
    }

    const id = req.params.id;

    try {
        const data = await sociosModel.findByIdAndUpdate(id, req.body, { useFindAndModify: false });

        if (!data) {
            res.status(404).send({
                message: `No es posible actualizar ${id}.`
            });
        } else res.send({ message: data || "Actualizado correctamente." });
    }
    catch (err) {
        res.status(500).send({
            message: err.message || "Error actualizando el producto con id=" + id
        });
    }
});
route.delete('/:id', async function (req, res) {
    const id = req.params.id;

    try {
        const data = await sociosModel.findByIdAndRemove(id)

        if (!data) {
            res.status(404).send({
                message: `No fue posible borrar ${id}.`
            });
        } else {
            res.send({
                message: data || "Borrado correctamente!"
            });
        }
    } catch (err) {
        res.status(500).send({
            message: err.message || "Error, no fue posible borrar" + id
        });
    }

});



module.exports = route