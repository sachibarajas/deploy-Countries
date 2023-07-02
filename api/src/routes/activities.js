const { Router } = require('express');

const actRouter = Router();

const {
    getActivitiesHandler, 
    createActivityHandler,
    activitiesInitHandler } = require('../handlers/activitiesHandlers')

actRouter.get('/', getActivitiesHandler);
actRouter.post('/', createActivityHandler);
actRouter.post('/bulk', activitiesInitHandler);

module.exports = actRouter