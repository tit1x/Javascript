//crear cuenta

function cuenta (nombre, apellido, email, contraseña){
    this.nombre = nombre;
    this.apellido = apellido;
    this.email = email
    this.contraseña = contraseña
}


const arrayCuenta = [];
arrayCuenta.push ( new cuenta ("Thiago", "Lodigiani", "titixlodigiani@gmail.com", "**********" ))


$("#crearCuenta").on("submit",validarCuenta)
    function validarCuenta (e){
        e.preventDefault();
        let formulario = e.target

        let nombre = formulario.children[0].children[0].children[1].value
        let apellido = formulario.children[0].children[1].children[1].value
        let email = formulario.children[1].children[1].value
        let contraseña = formulario.children[2].children[1].value
        let confirmarContraseña = formulario.children[3].children[1].value
        let añoDeNacimiento = formulario.children[4].children[1].value

        
        if (((nombre && apellido && email && contraseña) != "") && (contraseña == confirmarContraseña)){arrayCuenta.push ( new cuenta (nombre, apellido, email, contraseña))
            console.log (arrayCuenta[1])
                $("#cuentaCorrecta").show(500)   
                                    .delay(5000)
                                    .hide(500)   
            }
        
        
        if (((nombre || apellido || email || contraseña) == "") || (contraseña != confirmarContraseña)){
            
            $("#cuentaIncorrecta").show(500)
                                  .delay(5000)
                                  .hide(500)
        }
        

    }
    




