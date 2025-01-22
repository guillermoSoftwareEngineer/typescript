(()=>{
// FUNCION CON RETORNO (SIN INFERENCIA CON INFERENCIA)

const calcTotal =(precios:number[],):number=>{//declaracion de parametro como array
  // si usamos ':number' luego de el parametro de la funcion y antes de
// la flecha => de la arrow function se declara que el retorno es un number (sin inferencia)
  let total = 0
  precios.forEach((item)=>{total =+ item})// suma uno a cada iteracion del array
  return total
}

const rta = calcTotal([2,4,6,8,10]) //como la variable precios es tipo number
// tambien rta es tipo number por inferencia
console.log(rta)

// FUNCION SIN RETORNO

const imprTotal = (precios:number[])=>{
  // igual se puede declarar explicitamente como void agregando a la linea
  // de  declaracion ":void" de la siguiente forma const imprTotal = (precios:number[]): void =>{
  const rta2 = calcTotal(precios)
  console.log(`El total es: ${rta2}`)
}

const rta2 = imprTotal([1,3,5,7,9])
console.log(`El tipo de dato rta es ${typeof(calcTotal)}`)//es una funcion de retorno tipo number
console.log(`El tipo de dato rta2 es ${typeof(imprTotal)}`)// es function void, por que la funcion no usa return, asi aprecera:
//se puede comprobar poniendo el cursor sobre el nombre de la funcion

// const calTotal:(precios:number[])=> number
// const cimprTotal:(precios:number[])=> void
})()
