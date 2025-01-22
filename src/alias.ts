// ALIAS Y TIPOS LITERALES

// *ALIAS

(()=>{

// let idUsuario : string|number|boolean

// podemos crear nuestros propios tipos se debe usar camellCase para la variable
// usar type y en vez de usar : usamos = asi:

type IDUsuario = string|number|boolean //aqui se puede modificar el tipo de dato del tipo

function saludar(idUsuario:IDUsuario){//se usa el nuevo tipo
  if (typeof idUsuario === 'string') {
    console.log(`string ${idUsuario.toLowerCase()}`);
}
}

// *TIPOS LITERALES
// se puede especificar el tipo de opciones validas especificas
let camisetaTalla: 'S'|'M'|'L'
camisetaTalla ='L'
camisetaTalla ='M'
camisetaTalla ='S'
// camisetaTalla ='asfsDFL' PRODUCE ErrorNO HACE PARTE DE LAS OPCIONES
// igualmente se podria crear el tipo mediante type

// al crear tipo la sugerencia del editor va a ser de las opciones de datos dentro del tipo
})()
