const express = require('express');

const destinosModel = require('../models/destinos');

var route = express.Router();

route.get('/', async function (req, res) {
    try {
        const data = await destinosModel.find({});

        return res.json({ data, error: false });

    } catch (error) {
        console.log('Error', error);

        return res.status(500).json({
            error: true,
            message: err.message || 'Internal server error'
        });
    }
});

route.get('/:id', async function (req, res) {
    const id = req.params.id;

    try {
        const data = await destinosModel.findById(id);

        if (!data) {
            res.status(404).send({
                error: true,
                message: "No encontrado " + id
            });
        }

        else res.send({ data, error: false });

    } catch (err) {
        res.status(500).send({
            error: true,
            message: err.message || "Error al buscar id=" + id
        });
    };
});

route.post('/', async function (req, res) {
    try {

        const cuit = req.body?.cuit;
        const condicion_iva = req.body?.condicion_iva;
        const domicilio = req.body?.domicilio;
        const localidad = req.body?.localidad;
        const provincia = req.body?.provincia;
        const telefono = req.body?.telefono;

        if (
            !cuit ||
            !condicion_iva ||
            !domicilio ||
            !localidad ||
            !provincia ||
            !telefono
        ) {
            return res.status(400).json({ message: 'Bad request', error: true });
        }

        const data = await destinosModel.create(req.body);
        return res.status(201).json({ data, error: false });
    } catch (error) {
        console.error('Error', error);
        return res.status(500).json({
            error: true,
            message: error.message || 'Internal server error'
        });
    }
});

route.put('/:id', async function (req, res) {
    if (!req.body) {
        return res.status(400).send({
            error: true,
            message: "Data to update can not be empty!"
        });
    }

    const id = req.params.id;

    try {
        const data = await destinosModel.findByIdAndUpdate(id, req.body, { useFindAndModify: false });

        if (!data) {
            res.status(404).send({
                error: true,
                message: `No es posible actualizar ${id}.`
            });
        } else res.send({ message: data || "Actualizado correctamente.", error: false });
    }
    catch (err) {
        console.error('Error', err);
        res.status(500).send({
            error: true,
            message: err.message || "Error actualizando id=" + id
        });
    }
});

route.delete('/:id', async function (req, res) {
    const id = req.params.id;

    try {
        const data = await destinosModel.deleteOne({ _id: id })

        if (!data) {
            res.status(404).send({
                error: true,
                message: `No fue posible borrar ${id}.`
            });
        } else {
            res.send({
                error: false,
                message: data || "Borrado correctamente!"
            });
        }
    } catch (err) {
        console.error('Error', err);
        res.status(500).send({
            error: true,
            message: err.message || "Error, no fue posible borrar" + id
        });
    }
});


module.exports = route