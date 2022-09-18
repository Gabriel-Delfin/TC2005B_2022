function repiteCon(){
    let contrasena1 = document.getElementById("contrasena1").value;
    let contrasena2 = document.getElementById("contrasena2").value;
    console.log(contrasena1, contrasena2);

    if (contrasena1 == ""){
        alert("Contrasena no puede estar vacio");
    }
    else if(contrasena1 == contrasena2){
        alert("Correcto");
        return false
    }
    else if(contrasena1 != contrasena2){
       alert("Contrasena no coincide");
    }
}

/*let contra = document.getElementById("contrasena1");
let contra2 = document.getElementById("contrasena2");

if (contra == contra2) {
    

}

var strongRegex = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})");*/