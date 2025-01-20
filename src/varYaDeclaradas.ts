// el siguiente codigo produce error ya que las variables
// fueron  declaradas en otro archivo

// let nombreProducto = 'producto 1'
// let precioProducto = 1200

// ese error  no se produce en frameworks como react angular o vuejs,
// por que en estos se tiene alcance de funcion o componente
// o clases


// para trabajar en un typescript sencillo solo se
// debe establecer una funcion anonima autoejecutada (se llama a si misma)

(()=>{
  let nombreProducto = 'producto 1'
  let precioProducto = 1200
})()
