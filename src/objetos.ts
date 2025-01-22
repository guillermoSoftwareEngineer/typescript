(()=>{

// la siguiente funcion solo usa 2 parametros,
// pero muchos parametros es mejor enviar un objeto
// como parametro
 const login =(email:string, password:string)=>{
  console.log(email,password)
 }

 login('guillermovasbendev@gmail.com','3333333333333')

//  USO DE OBJETO PARA USAR VARIOS PARAMETROS

 var datos ={
  nombre: 'Guillermo',
  apellido: 'Vasquez',
  edad:'39',
  correo: 'guillermovasbendev@gmail.com',
  contrasena: 1237556
 }

 const daotosObjeto = (datos:{nombre:string, apellido:string, edad:string, correo:string, contrasena?:number})=>{// si usamos ? como en "contrasena?:number" entonces
  // estamos diciendo que ese parametro es opcional
  console.log(
    `Mi nombre es: ${datos.nombre} ${datos.apellido}, mi edad es ${datos.edad}, mi correo es ${datos.correo}, y mi contrasena no te la voy a dar `
  )// los llamados al objeto deben llamarse como parametros, similar al this, de un constructor o clase (datos.correo)
 }
 daotosObjeto(datos)
})()
