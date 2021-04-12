const config = require('../config');
const axios = require('axios');
const logger = require('../loaders/logger');

class weatherRepository{

    constructor(){
        this.lang = 'es';
        this.units = 'metric';
        this.pathBase = config.openweathermap.pathBase;
        this.appid = config.openweathermap.apikey;
    }

    async weatherByCoordinates(lon, lat){
        try {
            const instancia = axios.create({
                baseURL: `${this.pathBase}`,
                params: {
                    'appid': this.appid,
                    'units': this.units,
                    'lang': this.lang,
                    lat,
                    lon
                }
            })
            const response = await instancia.get()
            return response.data    // que solo devuelva la data

        } catch (error) {
            throw error;        //como ya tenemos un handler de error solo hay que arrojarlo
        }
    }
}
module.exports = weatherRepository;