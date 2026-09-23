const express = require('express')
const app = express()

app.get('/', (req, res) => {
    console.log("Home Page")
    res.status(200).send("Home Page")
})

module.exports = app