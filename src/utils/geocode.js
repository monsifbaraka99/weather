const request = require('request')

const geocode = (address, callback) => {

    const url = "https://api.mapbox.com/search/geocode/v6/forward?q=" + address + "&access_token=pk.eyJ1IjoibW9uc2lmOTkiLCJhIjoiY2x5d2FmOWVjMG1mdzJpcTRxbzd5bjZpcyJ9.kb7Ww6gGxgLLSirJIZMuyw"

request({ url , json : true}, (error, {body})=> {
    if (error) {
        callback(console.log("Unable to connect to location services"), undefined)

    }
    else if (body.features.length === 0 ){
        callback(console.log("Unable to find location. Try another search"), undefined)}
    else {
        callback(undefined, {
              Longitude: body.features[0].geometry.coordinates[0],
              Latitude : body.features[0].geometry.coordinates[1],
            location : body.features[0].properties.full_address }
        )
    }

        })}
    
module.exports = geocode