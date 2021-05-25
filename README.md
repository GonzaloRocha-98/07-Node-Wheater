# 07-Node-Wheater
**This is a weather API, this connects with the mapbox and openweather api.
The mapbox api return the location of a place and the openweather api return the weather of that location**

## Packages
- express ()
- nodemon (update the app when code is modified)
- morgan (HTTP request logger middleware)
- dotenv (loads environment variables)
- winston (loggers)
- swagger-ui-express (api documentation)
- axios (communication with others apis)
 
## How to install

- Clone the repository 
- Run command npm install
- Generate .env file, take example .env-example

## Services
- Run 'npm run dev'
- http://localhost:{PORT}/api/v1
    * *GET/citites/{city}* Get a list of cities with the same name provided 
    * *GET/weather/?lon=val1&lat=val2* Get the current weather with de specified coordinates
    * *Get/weather/{city}/{id}* Get the current weather with the name and id of a city 

    Check a swagger of the API (*/documentation*) to see how it works.
    Or glance at https://node07-weather-api.herokuapp.com/documentation/
