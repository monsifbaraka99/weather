const request = require('request')

const forecast = (Latitude, Longitude, callback) => {

    const url = "http://api.weatherstack.com/current?access_key=9ad53a18fd4b86d35b0b5197b7c83a71&query="+ Latitude + "," + Longitude

    request({url : url , json : true}, (error, response) => {
        if (error) {
            callback("Unable to connect to weather services", undefined)
        } else if (response.body.error) {
            callback('Please specify a valid location identifier using the query parameter', undefined)
 
        } else { callback(undefined, {
            temperature : response.body.current.temperature,
            windspeed : response.body.current.wind_speed,
            precipitation :  response.body.current.precip,
            heure : response.body.location.localtime
        })

        }
    })



}

module.exports = forecast