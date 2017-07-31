const express = require('express')
const bodyparser = require('body-parser')
const morgan = require('morgan');
const db = require('../database/db')
const apodrouter = require('../server/router/serverRouter') 

const app = express();
const ip = 'localhost';
const port = 1717;


app.use(express.static('angular-client'))
   .use(bodyparser.json())
   .use(bodyparser.urlencoded({extended: true}))
   .use(morgan('dev'))
   .use('/apods', apodrouter)

app.listen(port, ip, () => {
  console.log(`connected on port on port: ${port}`)
})
