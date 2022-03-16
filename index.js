const express = require('express')
const initDB = require('./config/db');
const cors = require('cors')
const app = express()

const port = 9000;
const pathApi = '/api/';

app.use( express.urlencoded({extended:true}) );
app.use(express.json())

app.use(cors({
    "origin": "*",
    "methods": "GET,HEAD,PUT,PATCH,POST,DELETE",
    "preflightContinue": false,
    "optionsSuccessStatus": 204
}))

// ROUTES
const picturesRoute = require('./routes/RoutesPictures');

// USE ROUTES
app.use( pathApi, picturesRoute)

const listener = app.listen( port, () =>{
    console.log("estoy en servivio");
});

initDB();