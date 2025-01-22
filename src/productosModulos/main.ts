import {addProduct,calcstock,products} from './producto.services'
//la linea anterior me permite importar los modulos o funciones desde el archivo producto.services
//  no es necesario usar el .ts por defecto typescript sabe que es un .ts

addProduct({
  title: 'Pro1',
  createdAt: new Date(1993, 1, 1),
  stock: 5
});

addProduct({
  title: 'Pro2',
  createdAt: new Date(1993, 1, 1),
  stock: 6,
  size: 'XL'
});

console.log(products)// muestra el array con los dos productos y sus caracteristicas
const total =calcstock()
console.log(total)// muestra el total de productos
