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


const http = require('http');

const server = http.createServer( (request, response) => {
    console.log(request.url);
    response.setHeader('Content-Type', 'text/html');
    response.write("");
    response.end();
});

server.listen(3000);