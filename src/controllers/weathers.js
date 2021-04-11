const express = require('express');

const CityRepository = require('../repositories/citiyRepository');
const repository = new CityRepository();


/**
 * 
 * @param {express.Request} req 
 * @param {express.Response} res 
 */

const cities = async (req, res) => {  //tambien se podría usar (req = Request, res = Response)

    res.json(await repository.findCities(req.params.city));
};



module.exports = {
    cities,
}
 
