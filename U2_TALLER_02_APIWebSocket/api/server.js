const express = require('express')
const body_parser = require('body-parser')
const path = require('path'); 
const config = require('./config')
const routes = require('./network/routes')
const db = require('./db')
// const winston = require('winston');

var app = express()
db( config.DB_URL )

app.use( body_parser.json() )
app.use( body_parser.urlencoded({extended: false}) )

app.use(express.static(path.join(__dirname, 'public')));

routes( app )
// // Configura un logger personalizado
// const logger = winston.createLogger({
//     level: 'info', // Nivel de registro
//     format: winston.format.simple(), // Formato del registro
//     transports: [
//       new winston.transports.Console() // Salida de logs en la consola
//     ]
//   });
  
app.listen( config.PORT )
console.log(`La aplicacion se encuentra arriba en http://localhost:${config.PORT}/`)
// logger.info('Este es un mensaje de información.');
// logger.error('Este es un mensaje de error.');