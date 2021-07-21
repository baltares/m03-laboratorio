//EJERCICIO 1
console.log("---- EJERCICIO 1. IVA SIN FUNCIONES ----");

const product = { count: 3, price: 12.55, type: "ropa" };

//Calcular el IVA
let iva = 0.21;
switch (product.type) {
    case "alimentación": iva = 0.1; break;
    case "libro": iva = 0.04;
}
console.log("IVA aplicable según tipo: " + iva * 100 + "%");

//Calcular el total sin IVA 
let totalsinIva = (product.count > 0) ? product.count * product.price : 0;
console.log("Total sin IVA: " + totalsinIva);

//Calcular IVA por unidad
let ivaUnidad = product.price * iva;
console.log("IVA por unidad: " + ivaUnidad);

//Calcular el total con IVA
let totalconIva = (product.count > 0) ? (totalsinIva + product.count * ivaUnidad) : 0;
console.log("Total con IVA: " + totalconIva);



//EJERCICIO 2
console.log("\n---- EJERCICIO 2. IVA CON FUNCIONES ----");

//Calcular el total sin IVA 
function getTotal(product) {
    return (product.count > 0) ? product.count * product.price : 0;
}

//Calcular IVA por unidad
function getVat(product) {
    let iva = 0.21;
    switch (product.type) {
        case "alimentación": iva = 0.1; break;
        case "libro": iva = 0.04;
    }
    return iva * product.price;
}

//Calcular IVA total
function getTotalVat(product) {
    return product.count > 0 ? product.count * getVat(product) : 0;
}

//Mostrar resultados por consola
function printProductPrice(product) {
    const subtotal = getTotal(product);
    const vat = getTotalVat(product);
    const total = subtotal + vat;

    console.log("Subtotal:", subtotal + "€");
    console.log("IVA:", vat + "€");
    console.log("Total:", total + "€");
}
printProductPrice(product);



// //EJERCICIO 3
console.log("\n---- EJERCICIO 3. SUELDO NETO ----");

const empleado = { bruto: 14500, hijos: 2, pagas: 14 };

//Calcular retención
let retencion = 0;
switch (true) {
    case (empleado.bruto >= 34000): retencion = 0.3; break;
    case (empleado.bruto >= 24000): retencion = 0.16; break;
    case (empleado.bruto >= 12000): retencion = 0.08;
}
if (empleado.hijos > 0 && retencion > 0) retencion = retencion - 0.02;
console.log("La retención a aplicar es: " + retencion * 100 + "%");

//Calcular neto anual
let netoAnual = empleado.bruto - (empleado.bruto*retencion);
console.log("El neto anual es: "+netoAnual);

//Calcular neto mensual
let netoMensual = (empleado.pagas==14)?netoAnual/14:netoAnual/12;
console.log("El neto mensual para "+empleado.pagas+" pagas es: "+netoMensual);
