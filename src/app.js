var express = require('express')
var cors = require('cors')
var cookieParser = require('cookie-parser')
var helmet = require('helmet')
const { respond } = require('./utils/respond')
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
    respond(res, 200, 'Express API is running....')

})

app.use(function(err, req, res, next){
    res.locals.message = err.message
    res.locals.error = req.app.get('env') === 'development' ? err : {}

    res.status(err.status || 500)
    res.json(err)
})

app.get('*', (req, res)=>{
    respond(res, 400, "Endpoint does not exist")
})

module.exports = app