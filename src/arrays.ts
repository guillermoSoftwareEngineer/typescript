(()=>{
  let precios =[1,23,44,55,23,6,7,8,32]
  // precios.push('ssss') produce error solo acepta numeros
  // precios.push(true) produce error solo acepta numeros
  precios.push(1003)//si permite la actualizacion

  let productos = ['hola',true]
  // si quiero que el motor de inferenncia no obstruya, agregar
  // datos de otro tipo debo hacerlo explicitamente

  // declaracion de array explicito
  let mixed :(number | string | boolean)[]= [11, 'hola', true]
  mixed.push('Guillermo')
  console.log('mixed', mixed)

  let numeros =[1,2,3,4,5,6,7]
  numeros.map(item => item*2);
})

// para javascript casi todos son de tipo objeto
