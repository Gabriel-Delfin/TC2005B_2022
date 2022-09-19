/* Login*/
function repiteCon(){
    let contrasena1 = document.getElementById("contrasena1").value;
    let contrasena2 = document.getElementById("contrasena2").value;
    let email = document.getElementById("email").value;
    console.log(contrasena1, contrasena2);

    if (contrasena1 == "" || email == ""){
        alert("No puede haber campos vacios");
    }
    else if(contrasena1 == contrasena2){
        location.href = "menu.html"  
    }
    else if(contrasena1 != contrasena2){
       alert("Contrasena no coincide");
    }
}

/*Cantidad de productos que se quieren comprar*/
let numero1 = 0;
let numero2 = 0;
let numero3 = 0;
/*Producto 1*/
function sumarCont1(){
    const contador = document.getElementById("contar1");
    numero1++;
    contador.innerHTML = numero1;
}
function restarCont1(){
    const contador = document.getElementById("contar1");
    if (numero1 == 0){}
    else{
        numero1--;
        contador.innerHTML = numero1;
    }
}
/*Producto 2*/
function sumarCont2(){
    const contador = document.getElementById("contar2");
    numero2++;
    contador.innerHTML = numero2;
}
function restarCont2(){
    const contador = document.getElementById("contar2");
    if (numero2 == 0){}
    else{
        numero2--;
        contador.innerHTML = numero2;
    }
}
/*Producto 3*/
function sumarCont3(){
    const contador = document.getElementById("contar3");
    numero3++;
    contador.innerHTML = numero3;
}
function restarCont3(){
    const contador = document.getElementById("contar3");
    if (numero3 == 0){}
    else{
        numero3--;
        contador.innerHTML = numero3;
    }
}

/*Ir a pago.html*/
function pagar(){
    location.href="pago.html";
}