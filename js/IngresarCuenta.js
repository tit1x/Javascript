//ingresar cuenta

do{
    alert ("tu email o contraseña son erroneos");
}
while (($(".email") != arrayCuenta[1].email) && ($(".contraseña") != arrayCuenta[1].contraseña))


if (($(".email") == arrayCuenta[1].email) && ($(".contraseña") == arrayCuenta[1].contraseña)){
    alert ("ingresaste a tu cuenta")
}