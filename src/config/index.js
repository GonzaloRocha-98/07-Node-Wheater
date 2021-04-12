// (carpeta config)configuraciones de propiedades que tenan que ver con el proyecto
// comunmente se sacan del archiv .env con dotenv
// la idea es poder usarlo en cualquier arhcivo js del proyecto 

const dotenv = require('dotenv');
const envFound = dotenv.config();

if(!envFound){
    throw new Error("Couldn´t find .env file.");
}

process.env.NODE_ENV = process.env.NODE_ENV || 'development';

module.exports = {
    port: process.env.PORT,
    api: {
        prefix: '/api/v1', //se suele definir la version de nuestra api
        
    },
    log: {
        level: process.env.LOG_LEVEL
    },
    swagger: {
        path: '/documentation'
    },
    mapbox: {
        apikey: process.env.MAPBOX_API_KEY,
        pathBase: 'https://api.mapbox.com/geocoding/v5/mapbox.places/'
    },
    openweathermap:{
        pathBase: 'https://api.openweathermap.org/data/2.5/weather',
        apikey: process.env.OPENWEATHER_API_KEY
    }
}