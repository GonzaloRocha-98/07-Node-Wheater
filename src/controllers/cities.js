const express = require('express');
const Succes = require('../handler/succesHandler'); 
const {findCities} = require('../services/cityService');


/**
 * 
 * @param {express.Request} req 
 * @param {express.Response} res 
 */

 const cities = async (req, res, next) => {  //tambien se podría usar (req = Request, res = Response)
    try {
        const cities = await findCities(req.params.city);
        const succes = new Succes(cities);
        res.json(succes);
    } catch (err) {
        next(err);
    }
};


module.exports = {
    cities,
}
 
