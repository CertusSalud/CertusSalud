function completarDatos(){

    usuario = document.getElementById("usuario").value;
    contrasena = document.getElementById("contrasena").value;
    validar = 0

    if(usuario == ""){
        validar++;
    }
    if(contrasena ==""){
        validar++;
    }
    if( validar == 0){
        document.getElementById("ingresar").disabled = false;   
    }else{
        document.getElementById("ingresar").disabled = true;
    }
}
document.getElementById("usuario").addEventListener("keyup",completarDatos);
document.getElementById("contrasena").addEventListener("keyup",completarDatos);
