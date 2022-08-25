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

//Se tiene que ir desde lo más específico hacia lo general
//Solo hay una respuesta
app.post('/trivia', (request, response, next) => {
    console.log(request.body);
    next();
});

app.use('/hola/lalo', (request, response, next) => {
    response.send('Hola! de la ruta "/hola/lalo"'); 
});

app.use('/hola', (request, response, next) => {
    response.send('Hola! de la ruta "/hola"'); 
});

app.use((request, response, next) => {
    console.log('Otro middleware sin reiniciar!');
    response.send('¡Hola mundo!'); //Manda la respuesta
})

app.listen(3000);