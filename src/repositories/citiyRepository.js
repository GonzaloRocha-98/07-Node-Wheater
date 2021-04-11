const config = require('../config');
const axios = require('axios');
const loffer = require('../loaders/logger');
const logger = require('../loaders/logger');

class cityRepository{
    
    constructor(){
        this.limit = 10;
        this.language = 'es';
        this.pathBase = config.mapbox.pathBase;
        this.apikey = config.mapbox.apikey;
    }

    async findCities (city){
        try {

            const instancia = axios.create({
                baseURL: `${this.pathBase}${city}.json`,
                params: {
                    access_token: this.apikey,
                    limit: this.limit,
                    language: this.language
                }
            })
            const response = await instancia.get()
            return response.data    // que solo devuelva la data

        } catch (error) {
            throw error;        //como ya tenemos un handler de error solo hay que arrojarlo
        }
        }
}

module.exports = cityRepository;