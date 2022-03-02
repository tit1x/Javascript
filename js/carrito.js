
let arrayCarrito = JSON.parse(localStorage.getItem("carrito"))
const sumar = (a,b) => a+b
const restar = (a,b) => a-b
let total = 0 

for( producto of arrayCarrito){
$("#agregados").prepend ("<li> <h6> "+ producto.producto.nombre + "  $" + producto.producto.precio + "<input class=checkboxCarrito type=checkbox checked> </h6> </li>");

total= sumar(total,producto.producto.precio)
}
$("#total").html("Total $" + total)
let checkboxCarrito = $(".checkboxCarrito")

checkboxCarrito.addClass("form-check-input  me-1 ")
/*checkboxCarrito.change(function(){
    for(let i=0; iproducto.lenght;i++){
        console.log(i)
        checkboxCarrito[i].click(function () {
            if(checkboxCarrito.prop("checked")== true) {
                total= sumar(total,producto.producto[i].precio)
                $("#total").html("Total $" + total)
        }
        if(cuadrado.prop("checked")== false){
            total= restar(total,producto.producto.precio)
            $("#total").html("Total $" + total)
        }})}})*/

    



