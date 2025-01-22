(()=>{
  let numero:number
  let cadena:string
  // let numero:number = undefined causaria error
  // let cadena:string = null causaria error
  let nulo:null // se crea como tipo any
  let indefinido:undefined // se crea como tipo any

  // si necesitamos estas variables con tipo de dato nullo
  // se declararia tipo de dato null

  // let nulo:null se crea como tipo null
  // let indefinido: null se crea como tipo null

  // let nulo se crea como tipo any
  // let indefinido: se crea como tipo any

  // puede ser necesario tener un tipo de datos number pero que a su vez contenga un null

  // let numero: number = null

  // entonces seria asi:

  // let numero: number | null = null

  // igual con undefined

  // CASO DE USO

  function saludo ( name: string | null){ //se define dato como null y string
    let hello = 'hola '
    if (name) {
      hello += name
    } else {
      hello += 'no hay nada'
    }
    console.log(hello)
  }

  saludo('Guillermo')// no hay error la funcion acepta string
  saludo(null)// no hay error la funcion acepta null

  // USO DE ? PARA ADVERTIR DEL TIPO DE DATO

  function hiV2(name: string | null) {
    // Declaramos una variable 'hello' con el texto inicial "Hola "
    let hello = 'Hola ';

    // Usamos += para concatenar a 'hello' el nombre en minúsculas si existe,
    // o "nobody" si el nombre es null o undefined.
    // El operador ?. (encadenamiento opcional) se usa aquí:
    // - Verifica si 'name' NO es null o undefined. PREGUNTA EL TIPO DE DATO? PARA CONTINUAR
    // - Si 'name' es válido, llama al método toLowerCase().
    // - Si 'name' es null o undefined, no llama toLowerCase() y devuelve undefined.
    hello += name?.toLowerCase() || 'nobody';

    // Mostramos el resultado final en la consola
    console.log(hello);
}

// Llamamos a la función pasando un string válido
hiV2('Jose'); // Salida: "Hola jose"

// Llamamos a la función pasando null
hiV2(null); // Salida: "Hola nobody"


})()
