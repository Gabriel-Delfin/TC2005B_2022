const filesystem = require('fs');
filesystem.writeFileSync('hola.txt', 'Hola desde node');
filesystem.writeFileSync('hola.txt', 'Saludos');

console.log("hola desde node");