const express = require('express');
const Succes = require('../handler/succesHandler'); 
const {
    weatherByCoordinatesService,
    weatherByCityIdService
        } = require('../services/weatherService');

/**
 * 
 * @param {express.Request} req 
 * @param {express.Response} res 
 */

const weatherByCoordinates = async (req, res) => {  //tambien se podría usar (req = Request, res = Response)
    const {lon, lat} = req.query;
    const weather = await weatherByCoordinatesService(lon, lat);
    const succes = new Succes(weather);
    res.json(succes);
};

/**
 * 
 * @param {express.Request} req 
 * @param {express.Response} res 
 */

const weatherByCityId = async (req, res) => {  //tambien se podría usar (req = Request, res = Response)
    const {city, id} = req.params;
    const weather = await weatherByCityIdService(city, id);
    const succes = new Succes(weather);
    res.json(succes);
};




module.exports = {
    weatherByCoordinates,
    weatherByCityId
}
 
