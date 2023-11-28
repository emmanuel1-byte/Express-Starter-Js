var express = require('express')
var { Respond } = require('./middlewares/respond')
var cors = require('cors')
var cookieParser = require('cookie-parser')
var helmet = require('helmet')
require('dotenv').config()
var app = express();


app.use(express.json())
app.use(express.urlencoded({ extended: false }))

const options = {
    origin: '*',
    methods: ['POST', 'PATCH','PUT', 'GET', 'DELETE'],
    allowheader: ['Content-Type', 'Authorization']
  }
app.use(cors(options))
app.use(cookieParser())
app.use(helmet())

app.get('/', (req, res)=>{
    new Respond(res, 200, 'Express API is running....')

})

app.get('*', (req, res)=>{
    new Respond(res, 400, "Endpoint does not exist")
})

module.exports = app