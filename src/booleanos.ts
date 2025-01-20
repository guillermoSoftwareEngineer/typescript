(()=>{
let estaHabilitada = true

// estaHabilitada = 'as' produce error
// estaHabilitada = 123 produce error

estaHabilitada= false

let esNueva: boolean = false
console.log('es nueva', esNueva)
esNueva=true
console.log('esnueva',esNueva)

const random =Math.random()
console.log('random',random)
esNueva = random >= 0.5 ? true:false;
console.log('esNueva',esNueva)
})();
