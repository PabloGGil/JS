localStorage.setItem('password',"ferreteria");
localStorage.setItem('usuario',"ferretero");


let botonLogin=document.getElementById('login');
botonLogin.addEventListener('click',validarLogin);


function validarLogin(e) {
    // let valideta=validarRegistro()
    usuarioIngresado=document.getElementById('usuario').value;
    passwdIngresada=document.getElementById('passwd').value;
    if (usuarioIngresado==localStorage.getItem('usuario') && passwdIngresada==localStorage.getItem('password')) {
        // Si la validación del formulario es exitosa, muestra un mensaje en la consola
        console.log('El formulario es válido. Enviar datos...');
        alert("Login exitoso")
        
   } else {
        // Muestra un mensaje en la consola indicando que el formulario no es válido
        console.log('El usuario o la contraseña son invalidos.');
        // Evita que el formulario se envíe
        e.preventDefault(); // Evita que el formulario se envíe si hay errores de validación
        alert("Credenciales incorrectas")
       
    }
};

function validarRegistro(){
    rta=[{rs:true,error:""}];
    rta[0]= validarPass('passwd'); // Validar campo de contraseña
    rta[1]= validarCorreo('correo');
    let estado={};
    estado.rs=rta[0].rs && rta[1].rs;
    estado.error=rta[0].error + "\n" + rta[1].error;
    

    return estado;
}

function validarCorreo(campo){
    const field = document.getElementById(campo); // Obtiene el elemento del campo mediante su ID
    const value = field.value
    let rta={rs:true,error:""};
    if(!/\w+@\w+.\w+/.test(value))
    {
        rta.rs=false;
        rta.error="correo invalido";
    }
    return rta;
}

function validarFecha(campo){
    let rta={rs:false,error:"fecha invalida"};
    if(/[0-9]+\/[0-9]+\[0-9]/.test(value))
    {
            rta.rs=true;
            rta.error="";
    }
    return rta;

}


function validarTexto(campo){
    let rta={rs:false,error:"correo invalido"};
    if(/\w+/.test(value))
    {
            rta.rs=true;
            rta.error="";
    }
    return rta;

}

function validarPass(campo) {
    const field = document.getElementById(campo); // Obtiene el elemento del campo mediante su ID
    const value = field.value
    result=PoliticaPassOK(value);
    return result; // Devuelve false indicando que la validación ha fallado
    
};

function PoliticaPassOK(valor){
    // let salida=rta;
    let salida={rs:true,error:""};
    // --- verificar cantidad de caracteres .... 8 caracteres minimo
    if (valor.length<CANT_MIN_CARACT ){
        salida.rs=false;
        salida.error="la cantidad de minima de caracteres es " + CANT_MIN_CARACT;
    }  
// --- verificar cantidad de letras ... 6 letras como minimo
// --- verificar cantidad DE NUMEROS ...2 MINIMO
    letras=0;
    nros=0; 
   for(let i=0; i<valor.length; i++){
        
        letra=valor[i];
        console.log(typeof letra);
        if(/[0-9]/.test(letra)){
                nros++;
        }
        if(/[a-zA-Z]/.test(letra)){
            letras++;
        }
    }
    if(nros<CANT_MIN_NUMEROS){
        salida.rs=false
        salida.error = salida.error + "\n"+"la cantidad de minima de numeros es " + CANT_MIN_NUMEROS;

    }
    if(letras<CANT_MIN_LETRAS){
        salida.rs=false;
        salida.error =salida.error +"\n"+"la cantidad de minima de letras es " + CANT_MIN_LETRAS;
    }

    return salida;
        
    
}

