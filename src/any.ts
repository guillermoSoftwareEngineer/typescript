(()=>{
  //any es un tipo de dato que indica que la variable puede ser
  // de cualquier tipo (en typescript)
  let varDinamica: any
  // varDinamica=123; no produce error
  // varDinamica='string'; no produce error
  // varDinamica={objeto:'objeto'}; no produce error
  // varDinamica= null; no produce error
  varDinamica='saludo'
  // varDinamica. (con punto) no ofrece recomendacion de metodo, por que
  // el editor no sabe que tipo de dato es

  // casting de any
  // se puede cambiar el tipo de dato de un any mediante un cast
  const rta =(varDinamica as string).toLowerCase
  // asi funcionaran la sugerencia de metodos con .lowerCase

  // una sintaxis aceptable para hacer lo mismo es usar <> y dentro
  // de el el tipo de dato
  var nuevaDinamica =3322
  const rta2 =(<number>nuevaDinamica).toFixed


})()

// se aconseja no usar any, aunque aveces puede ser necesario
