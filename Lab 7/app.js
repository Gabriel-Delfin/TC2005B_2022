setTimeout(() => console.log("código asíncrono"), 4000);
setTimeout(() => console.error("ERROR: System Failure"), 7000);

const filesystem = require('fs');
filesystem.writeFileSync('hola.txt', 'Hola desde node');

console.log("hola desde node");


const arreglo = [5000, 60, 90, 100, 10, 20, 10000, 0, 120, 2000,340, 1000, 50];

//Imprime el arreglo en orden porque se ejecuta con los timeouts de los valores del arreglo
for (let item of arreglo) {
    setTimeout(() => {
        console.log(item);
    }, item);
    //setTimeout detona el valor en cuanto a milisegundos
}


const http = require('http'); // se corre con "localhost:3000"

const server = http.createServer( (request, response) => {
    //Obtener la URL de la petición
    console.log(request.url);
    //Obtener la IP de la petición
    console.log(request.socket.remoteAddress);

    response.setHeader('Content-Type', 'text/html');
    response.write("<h1>Hola mundo desde node!</h1>");
    response.end();
});

server.listen(3000);