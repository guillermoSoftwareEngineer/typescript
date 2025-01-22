(()=>{
  console.log('Archivo ejecutándose correctamente');
//permite flexibilidad de js
//permite que pueda ser de varios tipos un dato
// no se usa inferencia se especifica el tipo de dato o datos
let otraVarDinamica: boolean | string |number = true
otraVarDinamica='hola'
otraVarDinamica=333
// no produce error ya que los datos usados estan dentro de lo valido
function saludar(miTexto:string|number){
  if (typeof miTexto === 'string') {
    console.log(`string ${miTexto.toLowerCase()}`);
  } else {
    console.log(`number ${miTexto.toFixed(1)}`);
  }
}
saludar('saludo')
saludar(23.22584)
// saludar(true) produce error ya que no hace parte de los tipos datos validos


})
