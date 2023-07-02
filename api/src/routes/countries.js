const { Router } = require('express');
const countRouter = Router();
const {getCountriesHandler,
    getCountryIdHandler,
    createAllCountries} = require('../handlers/countriesHandlers')



countRouter.get('/', getCountriesHandler);
countRouter.get('/:id', getCountryIdHandler);
countRouter.post('/', createAllCountries)

module.exports = countRouter;