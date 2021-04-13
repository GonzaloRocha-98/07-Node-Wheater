const logger = require('../loaders/logger');
const WeatherRepository = require('../repositories/weatherRepository');
const weatherRepository = new WeatherRepository();
const CityRepository = require('../repositories/cityRepository');
const cityRepository = new CityRepository();

const weatherByCoordinatesService = async(lon, lat) => {
    const weather = await weatherRepository.weatherByCoordinates(lon, lat);
    return {
        name: weather.name,
        description: weather.weather[0].description,
        temperature: weather.main.temp,
        thermal_sensation: weather.main.feels_like,
        temperatureMin: weather.main.temp_min,
        temperatureMax: weather.main.temp_max,

    }
    
}

const weatherByCityIdService = async(city,id)=>{

    const cities = await cityRepository.findCities(city); 
    const cityData = cities.features.find(e => e.id === id);

    const lon = cityData.geometry.coordinates[0];
    const lat = cityData.geometry.coordinates[1]; 
    return await weatherByCoordinatesService(lon, lat)
}

module.exports= {
    weatherByCoordinatesService,
    weatherByCityIdService
}