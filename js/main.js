let nIngresado=prompt("Introduzca un nombre de usuario para crear cuenta: ");
let cIngresado=prompt("Crear una contraseña: ");

let nombre=prompt("Muchas gracias. \nInicie sesión. Ingrese su usuario: ");
let contrasenia=prompt("Ingrese su contraseña: ");

let resultado=0
let pRemera=5000;
let pPantalon=3000;
let pZapatillas=15000;

function suma(precio) {
    return resultado=resultado+precio;
}

if ((nombre===nIngresado) && (contrasenia===cIngresado)) {
    console.log("Hola "+nombre);
    let producto=prompt("Nuestros productos: \n1.Remera: $5000 \n2.Pantalon: $3000 \n3.Zapatillas: $15000 \nPrecione cualquier letra para comprar. x para salir.");
    while (producto != "x") {
        console.log("Seleccionaste: "+ producto);
        producto=prompt("Seleccione los productos que desea comprar: \n1.Remera: $5000 \n2.Pantalon: $3000 \n3.Zapatillas: $15000 \nIngrese x para continuar.");

        switch (producto) {
            case "1":
                suma(pRemera);
                break;
            case "2":
                suma(pPantalon);
                break;
            case "3":
                suma(pZapatillas);
                break;    
            default:
                suma(resultado);
                break;
        }
    }

    console.log("El total a pagar es: "+resultado/2);
    console.log("Gracias por su compra");

}else{
    console.log("Usuario y/o contraseña incorrectos. Intente mas tarde");
}
