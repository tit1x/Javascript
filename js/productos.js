//productos

function productos (nombre, precio) {
    this.nombre = nombre;
    this.precio = precio;
}

const arrayProducto = []
arrayProducto.push (new productos ("Milanesas de Soja de Queso y Cebolla x 4 Unidades - Prasat", 300))
arrayProducto.push (new productos ("Empanadas de Verdura Sin TACC x 2 Unidades - La Delfina", 200))
arrayProducto.push (new productos ("Jugo 100% Exprimido Manzana Roja y Verde x 1000 ml - PURA FRUTTA", 60))
arrayProducto.push (new productos ("Not Milk Original x 1lt - NotCo", 320))
arrayProducto.push (new productos ("Aceite De Oliva Virgen X 1lt - EL FEDERAL", 600))
arrayProducto.push (new productos ("Lentejas 500g", 80))
arrayProducto.push (new productos ("Arroz Yamani Integral 500g", 120))
arrayProducto.push (new productos ("Dulce De Leche Tradicional 450g - Las Quinas", 400))
arrayProducto.push (new productos ("Yogurt a Base de Coco Vainilla con Granola Apto APLV x 160 g CRUDDA", 230))
arrayProducto.push (new productos ("Cookies Sabor A Elección x 200g - Delicel", 130))
arrayProducto.push (new productos ("Barra Sabor A Elección x 42g - Íntegra", 40))




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

function carrito (producto) {
    this.producto = producto;
}

const arrayCarrito = []


//sumatoria para total

let buttonAñadir = $(".buttonAñadir")

buttonAñadir[0].onclick = () => { arrayCarrito.push (new carrito(arrayProducto[0])); localStorage.setItem("carrito",JSON.stringify(arrayCarrito)) }
buttonAñadir[1].onclick = () => { arrayCarrito.push (new carrito(arrayProducto[1])); localStorage.setItem("carrito",JSON.stringify(arrayCarrito)) }
buttonAñadir[2].onclick = () => { arrayCarrito.push (new carrito(arrayProducto[2])); localStorage.setItem("carrito",JSON.stringify(arrayCarrito)) }
buttonAñadir[3].onclick = () => { arrayCarrito.push (new carrito(arrayProducto[3])); localStorage.setItem("carrito",JSON.stringify(arrayCarrito)) }
buttonAñadir[4].onclick = () => { arrayCarrito.push (new carrito(arrayProducto[4])); localStorage.setItem("carrito",JSON.stringify(arrayCarrito)) }
buttonAñadir[5].onclick = () => { arrayCarrito.push (new carrito(arrayProducto[5])); localStorage.setItem("carrito",JSON.stringify(arrayCarrito)) }
buttonAñadir[6].onclick = () => { arrayCarrito.push (new carrito(arrayProducto[6])); localStorage.setItem("carrito",JSON.stringify(arrayCarrito)) }
buttonAñadir[7].onclick = () => { arrayCarrito.push (new carrito(arrayProducto[7])); localStorage.setItem("carrito",JSON.stringify(arrayCarrito)) }
buttonAñadir[8].onclick = () => { arrayCarrito.push (new carrito(arrayProducto[8])); localStorage.setItem("carrito",JSON.stringify(arrayCarrito)) }
buttonAñadir[9].onclick = () => { arrayCarrito.push (new carrito(arrayProducto[9])); localStorage.setItem("carrito",JSON.stringify(arrayCarrito)) }
buttonAñadir[10].onclick = () => { arrayCarrito.push (new carrito(arrayProducto[10])); localStorage.setItem("carrito",JSON.stringify(arrayCarrito))}

