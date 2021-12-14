if (process.env.NODE_ENV !== 'production') require('dotenv').config()
const express = require('express')
const app = express()
const path = require('path')
const morgan = require('morgan')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const cors = require('cors')
const routes = require('./routes')
const measurementsRoute = require('./routes/API/measurements')
const exercisesRoute = require('./routes/API/exercises')
const workoutsRoute = require('./routes/API/workouts')
const PORT = process.env.PORT || 5000
mongoose.connect(`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.sk1zt.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`)
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'hbs')
app.set('view options', { layout: 'layouts/main' })
app.use(morgan('dev'))
app.use(cors({
    origin: ["http://localhost:3000"],
    methods: ["GET", "POST", "PATCH", "DELETE"],
    credentials: true
}))
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())
app.use('/', routes)
app.use('/API', measurementsRoute)
app.use('/API', exercisesRoute)
app.use('/API', workoutsRoute)
app.use((req, res, next) => {
    const error = new Error('Not found')
    error.status = 404
    next(error)
})
app.use((error, req, res, next) => {
    res.status(error.status || 500)
    res.json({
        error: {message: error.message}
    })
})
app.listen(PORT, () => console.log(`Server is running, http://localhost:${PORT}`))