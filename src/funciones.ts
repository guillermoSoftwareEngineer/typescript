(()=>{
  type Sizes = 'S' | 'M' |  'L' |  'XL';
// Si en js usamos una function que acepta 2 parametros, pero
// ponemos 3 parametros se sumaran solo los dos primeros, esto
// se puede solucionar con typescript

function crearProductosAJson (
title:string,
creado:Date, //el tipo de dato Date no tiene tipado en typescript
stock:number,
size:Sizes
){
return{
  title,
  creado,
  stock,
  size
}
}
// si no envio todos los parametros necesarios, me muestra error
const producto1 = crearProductosAJson('Guittarra', new Date(),33,'M')

// nota es mejor trabajar con arrow functions

// Creamos la función como una arrow function
const crearProductosAJson2 = (
  title: string,
  creado: Date, // El tipo Date sigue sin tener tipado explícito en TypeScript
  stock: number,
  size?: Sizes //el uso de ? hace que la variable sea opcional
  // podria ponerse  size: Sizes | undefined pero al ejecutar la funcion en el
  // espacio de ese parametro se debe poner undefined crearProductosAJson2('Guitarra', new Date(), 33, undefined );
) => ({
  title,
  creado,
  stock,
  size,
});

// Llamamos a la función asegurándonos de enviar todos los parámetros necesarios
const producto2 = crearProductosAJson2('Guitarra', new Date(), 33, ); // no solicita el ultimo parametro, ya que se declaro opcional

console.log(producto1);
})()



