const express = require('express');
const Succes = require('../handler/succesHandler'); 
const {findCities} = require('../services/cityService');


/**
 * 
 * @param {express.Request} req 
 * @param {express.Response} res 
 */

 const cities = async (req, res) => {  //tambien se podría usar (req = Request, res = Response)
    const cities = await findCities(req.params.city);
    const succes = new Succes(cities);
    res.json(succes);
};


module.exports = {
    cities,
}
 
