// @ts-check   => el comando anterior activa la muestra de errores
//  se llama "analizador de codigo estatico"

(() => {
  const myCart = [];
  const products = [];
  const limit = 2;

  // Función para obtener los productos
  async function getProducts() {
    // Error 1: 'mehtod' está mal escrito, debe ser 'method'
    const rta = await fetch('http://api.escuelajs.co/api/v1/products', {
      method: 'GET', // Corregido
    });

    // Error 2: No existe un método llamado 'parseJson', debe ser 'json'
    const data = await rta.json(); // Corregido
    // products.push(...data); // Error 3: 'concat' no modifica el array original
  }

  // Función para calcular el total
  function getTotal() {
    let total = 0; // Error 4: 'const' no permite reasignación, debe ser 'let'
    for (let i = 0; i < products.length; i++) { // Error 5: 'length()' no es un método, debe ser 'length'
      // total += products[i].price; // Error 6: 'prize' está mal escrito, debe ser 'price'
    }
    return total;
  }

  // Función para agregar un producto al carrito
  function addProduct(index) {
    // Error 7: 'getTotal' es una función, falta '()' para llamarla
    if (getTotal() <= limit) { // Corregido
      myCart.push(products[index]);
    }
  }

  // Llamadas a las funciones
  (async () => {
    await getProducts();

    // Error 8: 'addProducto' no está definido, debe ser 'addProduct'
    addProduct(1); // Corregido
    addProduct(2); // Corregido

    const total = getTotal();
    console.log(total);

    // Error 9: Operación inválida al sumar un objeto a un número
    const person = {
      name: 'Nicolas',
      lastName: 'Molina',
    };
    const rta = `${person.name} ${person.lastName} tiene un límite de ${limit}`; // Corregido
    console.log(rta);
  })();
})();
