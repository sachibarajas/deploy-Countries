const {getCountries, fillDataBase, getCountrybyId} = require('../controllers/countriesController')

const createAllCountries = async (req,res)=>{
    try {
          const countries = await fillDataBase();
          return res.status(200).json(countries)
    } catch (error) {
        return res.status(404).send({"error":error})
    }
}

const getCountriesHandler = async (req,res)=>{
    let {order, name, orderBy, continents, activity} = req.query;
    if (!order) order = 'ASC';
    if (!orderBy) orderBy = 'name';
    if (!continents) continents = 'all';
    try {
        const countries = await getCountries(order, orderBy, name, continents, activity);
        res.status(200).json(countries)
  } catch (error) {
      res.status(400).json({error: error.message});
  }
}

const getCountryIdHandler = async (req,res)=>{
    const {id} = req.params;
    try {
        const response = await getCountrybyId(id)
        if (response.length > 0) {
            res.status(200).json(response);
        } else {
            res.status(404).json({error: 'NOT FOUND'});
        }
        
    } catch (error) {
        res.status(400).json({error: error.message});
    }
}

module.exports = {getCountriesHandler,getCountryIdHandler,createAllCountries}