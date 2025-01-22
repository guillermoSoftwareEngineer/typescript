(function () {
    console.log('Archivo ejecutándose correctamente');
    //permite flexibilidad de js
    //permite que pueda ser de varios tipos un dato
    // no se usa inferencia se especifica el tipo de dato o datos
    var otraVarDinamica = true;
    otraVarDinamica = 'hola';
    otraVarDinamica = 333;
    // no produce error ya que los datos usados estan dentro de lo valido
    function saludar(miTexto) {
        if (typeof miTexto === 'string') {
            console.log("string ".concat(miTexto.toLowerCase()));
        }
        else {
            console.log("number ".concat(miTexto.toFixed(1)));
        }
    }
    saludar('saludo');
    saludar(23.22584);
    // saludar(true) produce error ya que no hace parte de los tipos datos validos
});
