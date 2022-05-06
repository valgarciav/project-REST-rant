require('dotenv').config()

//require express
const express = require('express')
const app = express()

//importing the router from places.js
app.use ('/places', require('./Controllers/places'))


app.get('/', (req, res) => {
    res.send('Hello world!')
})

// make another route to homepage route with path set to wildcard operator. route must be at bottom otherwise it will override other pages
// have 404 page route legitimately return a statud code 404. do this by calling .status(404) on response. can chain this together with .send()
app.get('*', (req, res) => {
    res.status(404).send('<h1>404 Page</h1>')
})

app.listen(process.env.PORT)





