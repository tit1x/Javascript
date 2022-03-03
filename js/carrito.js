
let arrayCarrito = JSON.parse(localStorage.getItem("carrito"))
const sumar = (a, b) => a + b
const restar = (a, b) => a - b
let total = 0

for (producto of arrayCarrito) {
    $("#agregados").prepend("<li> <h6> " + producto.nombre + "  $" + producto.precio + "<input class=checkboxCarrito type=checkbox value=" + producto.precio + " checked> </h6> </li>");

    total = sumar(total, producto.precio)
}



$("#total").html("Total $" + total)
let checkboxCarrito = $(".checkboxCarrito")
checkboxCarrito.addClass("form-check-input  me-1 ")

checkboxCarrito.click(function (e) {

    let monto = e.target.value
    monto = parseInt(monto)

    if (e.target.checked) {
        total = sumar(total, monto)
        $("#total").html("Total $" + total)
    }
    else {
        total = restar(total, monto)
        $("#total").html("Total $" + total)
    }
})





