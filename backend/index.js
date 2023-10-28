require('dotenv').config()
const express = require('express'),
    app = express(),
    cors = require('cors')

app.use(express.urlencoded({extended: true}))
app.use(express.json())
app.use(cors)





app.listen( process.env.PORT , () => {
    console.log(`tradingApp server started on port: ${process.env.PORT}`)
})