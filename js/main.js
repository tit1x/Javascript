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


//productos

function productos (nombre, precio) {
    this.nombre = nombre;
    this.precio = precio;
}

const arrayProducto = []
arrayProducto.push (new productos ("Milanesas de Soja de Queso y Cebolla x 4 Unidades - Prasat", 1))
arrayProducto.push (new productos ("Empanadas de Verdura Sin TACC x 2 Unidades - La Delfina", 1))
arrayProducto.push (new productos ("Jugo 100% Exprimido Manzana Roja y Verde x 1000 ml - PURA FRUTTA", 1))
arrayProducto.push (new productos ("Not Milk Original x 1lt - NotCo", 1))
arrayProducto.push (new productos ("Aceite De Oliva Virgen X 1lt - EL FEDERAL", 1))
arrayProducto.push (new productos ("Lentejas 500g", 1))
arrayProducto.push (new productos ("Arroz Yamani Integral 500g", 1))
arrayProducto.push (new productos ("Dulce De Leche Tradicional 450g - Las Quinas", 1))
arrayProducto.push (new productos ("Yogurt a Base de Coco Vainilla con Granola Apto APLV x 160 g CRUDDA", 1))
arrayProducto.push (new productos ("Cookies Sabor A Elección x 200g - Delicel", 1))
arrayProducto.push (new productos ("Barra Sabor A Elección x 42g - Íntegra", 1))




//division por categoria
const Congelados = arrayProducto.slice (0,1)
if (Congelados == true){
console.log (Congelados)}

const Bebidas = arrayProducto.slice (2,3)
if (Bebidas == true){
console.log (Bebidas)}

const Alacena = arrayProducto.slice (4,5,6)
if (Alacena == true){
console.log (Alacena)}

const Refrigerados = arrayProducto.slice (7,8)
if (Refrigerados == true){
console.log (Refrigerados)}

const Empaquetados = arrayProducto.slice (9,10)
if (Empaquetados == true){
console.log (Empaquetados)}

function carrito (producto) {
    this.producto = producto;
}

const arrayCarrito = []


//sumatoria para total
const sumar = (a,b) => a+b
let total = 0
$("#total").html("Total $" + total)


let buttonAñadir = $(".buttonAñadir")

buttonAñadir[0].onclick = () => {total = sumar(total, arrayProducto[0].precio); arrayCarrito.push (new carrito(arrayProducto[0])); localStorage.setItem("carrito",JSON.stringify(arrayCarrito)); JSON.parse(localStorage.getItem("carrito")) ; $("#total").html("Total $" + total)}
buttonAñadir[1].onclick = () => {total = sumar(total, arrayProducto[1].precio); arrayCarrito.push (new carrito(arrayProducto[1])); localStorage.setItem("carrito",JSON.stringify(arrayCarrito)); JSON.parse(localStorage.getItem("carrito")) ; $("#total").html("Total $" + total)}
buttonAñadir[2].onclick = () => {total = sumar(total, arrayProducto[2].precio); arrayCarrito.push (new carrito(arrayProducto[2])); localStorage.setItem("carrito",JSON.stringify(arrayCarrito)); JSON.parse(localStorage.getItem("carrito")) ; $("#total").html("Total $" + total)}
buttonAñadir[3].onclick = () => {total = sumar(total, arrayProducto[3].precio); arrayCarrito.push (new carrito(arrayProducto[3])); localStorage.setItem("carrito",JSON.stringify(arrayCarrito)); JSON.parse(localStorage.getItem("carrito")) ; $("#total").html("Total $" + total)}
buttonAñadir[4].onclick = () => {total = sumar(total, arrayProducto[4].precio); arrayCarrito.push (new carrito(arrayProducto[4])); localStorage.setItem("carrito",JSON.stringify(arrayCarrito)); JSON.parse(localStorage.getItem("carrito")) ; $("#total").html("Total $" + total)}
buttonAñadir[5].onclick = () => {total = sumar(total, arrayProducto[5].precio); arrayCarrito.push (new carrito(arrayProducto[5])); localStorage.setItem("carrito",JSON.stringify(arrayCarrito)); JSON.parse(localStorage.getItem("carrito")) ; $("#total").html("Total $" + total)}
buttonAñadir[6].onclick = () => {total = sumar(total, arrayProducto[6].precio); arrayCarrito.push (new carrito(arrayProducto[6])); localStorage.setItem("carrito",JSON.stringify(arrayCarrito)); JSON.parse(localStorage.getItem("carrito")) ; $("#total").html("Total $" + total)}
buttonAñadir[7].onclick = () => {total = sumar(total, arrayProducto[7].precio); arrayCarrito.push (new carrito(arrayProducto[7])); localStorage.setItem("carrito",JSON.stringify(arrayCarrito)); JSON.parse(localStorage.getItem("carrito")) ; $("#total").html("Total $" + total)}
buttonAñadir[8].onclick = () => {total = sumar(total, arrayProducto[8].precio); arrayCarrito.push (new carrito(arrayProducto[8])); localStorage.setItem("carrito",JSON.stringify(arrayCarrito)); JSON.parse(localStorage.getItem("carrito")) ; $("#total").html("Total $" + total)}
buttonAñadir[9].onclick = () => {total = sumar(total, arrayProducto[9].precio); arrayCarrito.push (new carrito(arrayProducto[9])); localStorage.setItem("carrito",JSON.stringify(arrayCarrito)); JSON.parse(localStorage.getItem("carrito")) ; $("#total").html("Total $" + total)}
buttonAñadir[10].onclick = () => {total = sumar(total, arrayProducto[10].precio); arrayCarrito.push (new carrito(arrayProducto[10])); localStorage.setItem("carrito",JSON.stringify(arrayCarrito)); JSON.parse(localStorage.getItem("carrito")) ; $("#total").html("Total $" + total)}

