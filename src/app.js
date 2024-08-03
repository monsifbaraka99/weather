const path = require("path")
const express = require("express")
const hbs = require('hbs')
const geocode = require('./utils/geocode.js')
const forecast = require('./utils/forecast.js')


const app = express()
const PublicDirectoryPath = path.join(__dirname, "../public")
const viewsPath = path.join(__dirname, "../templates/views")
const partialPath = path.join(__dirname, "../templates/partials")

app.set("view engine", "hbs")
app.set("views", viewsPath)
hbs.registerPartials(partialPath)
app.use(express.static(PublicDirectoryPath))

app.get('', (req, res) => {
    res.render('index', {
        title : "Weather App",
        name : "Monsif"
    })
})


app.get('/weather', (req, res) => {
    if (!req.query.adress) {
        return res.send({"error" : 'please give an adress'})
    }

    geocode(req.query.adress, (error, {Latitude, Longitude, heure, location} = {}) => {
        if (error) {
            return res.send({"error":error})
        }
        forecast(Latitude, Longitude, (error, forecastData) =>{
            if (error) {
                return res.send({"error":error})
            }

            res.send({
                "heure" : heure,
                "Location " : location,
                "data" : forecastData
            })
        })
    })
})

app.get('/*', (req, res) => {
    res.render('404',
    )
})

app.get('/help/*', (req, res) => {
    res.render('404',
    )
})





app.listen(3000, () => {
    console.log('Server is up on port 3000')
})
