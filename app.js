function agregarProducto(nombreProducto, precioProducto) {

    while (nombreProducto != '*') {
        precioProducto = Number(prompt("Ingrese el precio del producto"));
        precio += precioProducto;
        alert("Producto agregado: " + nombreProducto);
        document.write(nombreProducto + " ---- " + precioProducto + "<br>");
        nombreProducto = prompt("Agregue otro producto o '*' para salir.");
    }
    return precio;
}

function precioTotal() {
    document.write("El precio total de su compra es: " + precio);
}

let producto = prompt("Agregue un producto o presione '*' para salir");
let precio = 0;
if (producto == '*') {
    document.write("Decidió salir, chau amable homo sapiens." + "<br>")
}
agregarProducto(producto);
precioTotal();