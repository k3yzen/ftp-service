const router = require('express').Router();
const direccionService = require('./direccion.service');
const authController = require('../../controllers/authControllers');

router.route('/')
.get(authController.isAuthenticated, async (req, res) => {
    const results = await direccionService.getAllDireccion();
    res.send(results);
})
.post(authController.isAuthenticated, async (req, res) => {
    const direccion = {
        "cliente_id": req.body.cliente_id,
        "comuna_id": req.body.comuna_id,
        "direccion": req.body.direccion,
        "region_id": req.body.region_id
    }
    const results = await direccionService.createDireccion(direccion);
    res.send(results);
})

router.get('/:id', authController.isAuthenticated, async (req, res) => {
    const results = await direccionService.getDireccionById(req.params.id);
    res.send(results);
})

module.exports = router;