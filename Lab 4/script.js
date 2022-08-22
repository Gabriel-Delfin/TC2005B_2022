//Función 1
let numero_pedido = prompt("Ingrese un número entero: ");
function tabla() {
    let crear_tabla = "<table>";
    crear_tabla += "<tr>";
    crear_tabla += "<th>" + "Numero" + "</th>"
    crear_tabla += "<th>" + "Cuadrado" + "</th>"
    crear_tabla += "<th>" + "Cubo" + "</th>"
    crear_tabla += "</tr>";
    for (let i = 0; i < numero_pedido; i++) {
        crear_tabla += "<tr>";
        crear_tabla += "<td>" + i + "</td>" + "<td>" + i * i + "</td>" + "<td>" + i * i * i + "</td>";
        crear_tabla += "</tr>";
    }
    crear_tabla += "</table>";
    return crear_tabla;
}
document.getElementById("funcion_1").innerHTML = tabla();

//Función 2
var num_1 = Math.floor(Math.random() * 10);
var num_2 = Math.floor(Math.random() * 10);
suma = num_1 + num_2;
var hora_inicio = Date.now();
const suma_usuario = prompt("¿Cuánto es " + num_1 + " + " + num_2 + " ?")
var hora_fin = Date.now();
function suma_resultado() {
    if (suma == suma_usuario) {
        respuesta = "¡Acertaste, muy bien! <br></br>";
        return respuesta;
    } else {
        respuesta = "Fallaste, el resultado correcto era " + suma + ", no " + suma_usuario + "<br></br>";
        return respuesta;
    }
    let hora =(hora_fin - hora_inicio) / 1000;
    respuesta = "¡Lograste hacer la suma en " + hora + " segundos!";
    return respuesta;
}
document.getElementById("funcion_2").innerHTML = suma_resultado();

//Función 3
const arreglo = [0, 0, 123, 3149, 0, -14, 0, -1, 13, 15, -41, -4, -89];
function contador() {
    var positivo = 0;
    var negativo = 0;
    var cero = 0;
    for (let i = 1; i < arreglo.length; i++) {
        if (arreglo[i] == 0) {
            cero += 1;
        } else if (arreglo[i] < 0) {
            negativo += 1;
        } else {
            positivo += 1;
        }
    }
    let contador_final = "<b>" + "Arreglo: " + "</b>" + arreglo + "<br></br>" + "Números positivos: " + positivo + "<br></br>" + "Números negativos: " + negativo + "<br></br>" + "Ceros: " + cero + "<br></br>";
    return contador_final;
}
document.getElementById("funcion_3").innerHTML = contador();

//Función 4
function promedio() {
    const matriz = [[70, 60, 90, 15, 100], [80, 85, 0, 90, 95]];
    let matriz_promedio = [];
    var suma_promedio = 0;
    for (let i = 0; i < matriz.length; i++) {
        suma_promedio = 0;
        for (let j = 0; j < matriz[i].length; j++) {
          suma_promedio += matriz[i][j];
        }
        matriz_promedio.push(suma_promedio / matriz[i].length);
      }
      let resultado_promedio ="Promedios: " + matriz_promedio;
      return resultado_promedio;
}
document.getElementById("funcion_4").innerHTML = promedio();

//Función 5
var numero = Math.floor(Math.random() * 1000);
function numero_inverso() {
    const numero_invertido = parseInt(numero.toString().split("").reverse().join(""));
    let numero_inverso_final = "Número original: " + numero + "<br></br>" + "Número inverso: " + numero_invertido;
    return numero_inverso_final;
}
document.getElementById("funcion_5").innerHTML = numero_inverso();