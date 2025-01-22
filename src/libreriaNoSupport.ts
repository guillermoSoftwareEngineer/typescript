// var _ =require('lodash') esta es la sintaxis de uso segun la libreria lodash

import _ from 'lodash'

// si se pone el cursor sobre el error en la linea AuthenticatorAssertionResponse, entonces
// me dice que use npm i --save-dev @types/lodash

// lo que me intlFormatDistance, que es necesario crear modulos de forma manual
// acerca de la libreria

// asi la alerta en la linea 3 desaparece

const data = [
  {
    username: 'nico',
    role: 'admin'
  },
  {
    username: 'valentina',
    role: 'seller'
  },
  {
    username: 'zulema',
    role: 'seller'
  },
  {
    username: 'santiago',
    role: 'customer'
  }
];

const rta =_.groupBy(data, (item)=>item.role)
console.log(rta)
