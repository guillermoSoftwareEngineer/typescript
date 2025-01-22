import {Product} from './producto.model'
//  aqui se trae el tpo de datos que necesitamos {} del otro archivo
// y en from la ruta en donde esta ubicado el otro archivo

 export const products: Product[] = [];//al agregar export me permite usar la variable en otros archivos externos

export const addProduct = (data: Product ) => { //al agregar export me permite usar la funcion en otros archivos externos
  products.push(data);
};

export const calcstock =(): number =>{
let total = 0
products.forEach((item)=>{
  total += item.stock // es un objeto usar item.stock
})
return total
}
