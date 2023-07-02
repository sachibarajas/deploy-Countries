const { Router } = require('express');
// Importar todos los routers;
const countRouter = require('./countries');
const actRouter = require('./activities');

const router = Router();

// Configurar los routers
router.use('/countries', countRouter);
router.use('/activities',actRouter);

module.exports = router;
