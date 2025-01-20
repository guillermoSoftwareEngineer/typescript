(()=>{
// numeros de forma inferida
let precioProducto =100
precioProducto=800
console.log("precioProducto",precioProducto)

// numeros de forma explicita

let numeros: number = 33;
numeros + 1; //no hay error
// numeros + numeros = numeros + '1'; muestra error
console.log('numero',numeros)

// let cantidadProductos:number; //si no se le da valor a la variable se debe ser explicito indicar el tipo de dato
// console.log('cantidadProductos',cantidadProductos)produce error, ya que la variable no tiene contenido
// si se usara en un condicional de if retornaria 'no apply" ya que el dato no existe'

let descuento = parseInt('123')
console.log('descuento', descuento)


})();

// siempre es mejor usar numbers a Number en la declaracion de la variable
