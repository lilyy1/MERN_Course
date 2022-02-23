const express = require('express')
const colors = require('colors')
const dotenv = require('dotenv').config() //env lets us customize individual working environment variables
const {errorHandler} = require('../backend/middleware/errorMiddleware')
const connectDB = require('../backend/config/db')
const port = process.env.PORT || 3000 //access PORT from .env or use 5000 if port not found

connectDB()

const app = express() //initialize express

app.use(express.json())
app.use(express.urlencoded({ extended: false}))

app.use('/api/goals', require('./routes/goalRoutes'))

app.use(errorHandler)

app.listen(port, () => console.log(`Server started on port ${port}`))