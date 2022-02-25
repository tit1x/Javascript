//crear cuenta

function cuenta (nombre, apellido, email, contraseña){
    this.nombre = nombre;
    this.apellido = apellido;
    this.email = email
    this.contraseña = contraseña
}


const arrayCuenta = [];
arrayCuenta.push ( new cuenta ("Thiago", "Lodigiani", "titixlodigiani@gmail.com", "**********" ))

const urlcuenta = "https://jsonplaceholder.typicode.com/posts"

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
            console.log (arrayCuenta[1]);
            $.ajax({
                method: "POST",
                url: urlcuenta,
                data: arrayCuenta[1],
                sucess: function () { $("#crearCuenta").append ("<h6 id=cuenta-correcta>Tu cuenta se ha creado correctamente</h6>")
                $("#cuenta-correcta").fadeIn(1000)
                                     .delay(5000)
                                     .fadeOut(1000)
                                     .hide() 
                                    }
            })
        }
        else{
            $("#crearCuenta").append ("<h6 id=cuenta-incorrecta>Algunos de sus datos estan erroneos o vacios</h6>");
            $("#cuenta-incorrecta").fadeIn(1000)
                                   .delay(5000)
                                   .fadeOut(1000)
                                   .hide()
        }

        }
    


//ingresar cuenta

do{
    alert ("tu email o contraseña son erroneos");
}
while (($(".email") != arrayCuenta[1].email) & ($(".contraseña") != arrayCuenta[1].contraseña))


if (($(".email") == arrayCuenta[1].email) & ($(".contraseña") == arrayCuenta[1].contraseña)){
    alert ("ingresaste a tu cuenta")
}

