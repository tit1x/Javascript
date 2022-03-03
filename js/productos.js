
//division por categoria
let producto = $(".producto")
let Congelados = producto.slice(0,2)
let Bebidas = producto.slice(2,4)
let Alacena = producto.slice(4,7)
let Refrigerados = producto.slice(7,9)
let Empaquetados = producto.slice(9,11)

let checkboxCongelados = $("#Congelados")  

checkboxCongelados.click(function () {
if(checkboxCongelados.prop("checked")== true) {
    Congelados.show()
}
else {
    Congelados.hide()
}
});

let checkboxBebidas = $("#Bebidas")  

checkboxBebidas.click(function () {
if(checkboxBebidas.prop("checked")== true) {
    Bebidas.show()
}
else {
    Bebidas.hide()
}
});

let checkboxAlacena = $("#Alacena")  

checkboxAlacena.click(function () {
if(checkboxAlacena.prop("checked")== true) {
    Alacena.show()
}
else {
    Alacena.hide()
}
});

let checkboxRefrigerados = $("#Refrigerados")  

checkboxRefrigerados.click(function () {
if(checkboxRefrigerados.prop("checked")== true) {
    Refrigerados.show()
}
else {
    Refrigerados.hide()
}
});

let checkboxEmpaquetados = $("#Empaquetados")  

checkboxEmpaquetados.click(function () {
if(checkboxEmpaquetados.prop("checked")== true) {
    Empaquetados.show()
}
else {
    Empaquetados.hide()
}
});

function carrito (nombre,precio) {
    this.nombre = nombre;
    this.precio = precio;
}

const arrayCarrito = []


//sumatoria para total

let buttonAñadir = $(".buttonAñadir")

buttonAñadir.click(function(e){
    let precio = e.target.value
    precio = parseInt(precio) 
    
    
    arrayCarrito.push (new carrito(e.target.name, precio)); localStorage.setItem("carrito",JSON.stringify(arrayCarrito))
    console.log(arrayCarrito)
})
