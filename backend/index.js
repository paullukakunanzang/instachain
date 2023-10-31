require('dotenv').config()
const express = require('express'),
    app = express(),
    cors = require('cors'),
    model = require('./models'),
    userRoute = require('./routes/user')

app.use(cors())
app.use(express.urlencoded({extended: false}))
app.use(express.json())

app.use((req,res,next) =>{
    console.log(req.path, req.method)
    next()
})

app.get('/', (req, res) => {
    res.send('welcome to tradingApp api')
})

app.use('/api/v1/users', userRoute)

app.listen( process.env.PORT , () => {
    console.log(`tradingApp server started on port: ${process.env.PORT}`)
})