const express = require('express')
const dotenv = require('dotenv').config() //env lets us customize individual working environment variables
const {errorHandler} = require('../backend/middleware/errorMiddleware')
const port = process.env.PORT || 3000 //access PORT from .env or use 5000 if port not found

const app = express() //initialize express

app.use(express.json())
app.use(express.urlencoded({ extended: false}))

app.use('/api/goals', require('./routes/goalRoutes'))

app.use(errorHandler)

app.listen(port, () => console.log(`Server started on port ${port}`))