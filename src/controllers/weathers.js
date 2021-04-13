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

const weatherByCoordinates = async (req, res, next) => {  //tambien se podría usar (req = Request, res = Response)
    try {
        const {lon, lat} = req.query;
        const weather = await weatherByCoordinatesService(lon, lat);
        const succes = new Succes(weather);
        res.json(succes);
    } catch (error) {
        next(error)
    }
};

/**
 * 
 * @param {express.Request} req 
 * @param {express.Response} res 
 */

const weatherByCityId = async (req, res, next) => {  //tambien se podría usar (req = Request, res = Response)
    try {
        const {city, id} = req.params;
        const weather = await weatherByCityIdService(city, id);
        const succes = new Succes(weather);
        res.json(succes);
    } catch (error) {
        next(error)
    }
};




module.exports = {
    weatherByCoordinates,
    weatherByCityId
}
 
