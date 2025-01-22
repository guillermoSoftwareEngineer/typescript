import {subDays,format} from 'date-fns'


// subday, hace restas de fechas (años bisiestos, meses de 30 o 31 dias)

const date = new Date(1985,3,13) //enero es el mes 0 (año,dia, mes)
const rta = subDays(date,30)
const str = format(rta, 'yyyy/MM/dd') //es una funcion de date-fns que formatea la fecha

console.log(str)
