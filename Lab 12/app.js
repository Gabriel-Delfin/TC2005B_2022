const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({extended: false}));

//Middleware
app.use((request, response, next) => {
    console.log('Middleware!');
    next(); //Le permite a la petición avanzar hacia el siguiente middleware
});

app.use((request, response, next) => {
    console.log('Segundo Middleware');
    next();
});
    
const rutas_trivia = require('./routes/trivia.routes');
app.use('/paul', rutas_trivia);

//Se tiene que ir desde lo más específico hacia lo general
//Solo hay una respuesta

app.use('/hola/lalo', (request, response, next) => {
    response.send('Hola! de la ruta "/hola/lalo"'); 
});

app.use('/hola', (request, response, next) => {
    response.send('Hola! de la ruta "/hola"'); 
});

app.use((request, response, next) => {
    console.log('Otro middleware sin reiniciar!');
    response.status(404);
    response.send('Error 404: El recurso solicitado no existe'); //Manda la respuesta
})

app.listen(3000);