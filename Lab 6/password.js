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
    const TBC = document.getElementById("totalTBC");
    numero1++;
    contador.innerHTML = numero1;
    TBC.innerHTML = numero1 *(100 +(0.16 * 100))
}
function restarCont1(){
    const contador = document.getElementById("contar1");
    const TBC = document.getElementById("totalTBC");
    if (numero1 == 0){}
    else{
        numero1--;
        contador.innerHTML = numero1;
        TBC.innerHTML = numero1 *(100 +(0.16 * 100))
    }
}
/*Producto 2*/
function sumarCont2(){
    const contador = document.getElementById("contar2");
    const WoTLK = document.getElementById("totalWoTLK");
    numero2++;
    contador.innerHTML = numero2;
    WoTLK.innerHTML = numero2 *(150 +(0.16 * 150))
}
function restarCont2(){
    const contador = document.getElementById("contar2");
    const WoTLK = document.getElementById("totalWoTLK");
    if (numero2 == 0){}
    else{
        numero2--;
        contador.innerHTML = numero2;
        WoTLK.innerHTML = numero2 *(150 +(0.16 * 150))
    }
}
/*Producto 3*/
function sumarCont3(){
    const contador = document.getElementById("contar3");
    const Cata = document.getElementById("totalCata");
    numero3++;
    contador.innerHTML = numero3;
    Cata.innerHTML = numero3 *(200 +(0.16 * 200))
}
function restarCont3(){
    const contador = document.getElementById("contar3");
    const Cata = document.getElementById("totalCata");
    if (numero3 == 0){}
    else{
        numero3--;
        contador.innerHTML = numero3;
        Cata.innerHTML = numero3 *(200 +(0.16 * 200))
    }
}

/*Ir a pago.html*/
function pagar(){
    location.href="pago.html";
}

function total(){
    const contar = document.getElementById("contar1");
    const TBC = document.getElementById("totalTBC");
    TBC = totalcontar *(100 +(0.16 * 100))
}