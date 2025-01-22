(() => {
  type Sizes = 'S' | 'M' | 'L' | 'XL';
  type Product = { // se crea un objeto de estructura compleja
    title: string,
    createdAt: Date,
    stock: number,
    size?: Sizes
  }

  // const products: any[] = []; establece que el objeto establecido con type al ser any, recibe
  //cualquier parametro ya que puede ser de cualquier tipo de dato

  const products: Product[] = []; // al poner products en vez de any
  // establecemos que se debe tener la estructura del objeto product

  const addProduct = (data: Product ) => { // se usa el objeto como tipo de dat establecido como tipado con type
    products.push(data);
  };

  addProduct({
    title: 'Pro1',
    createdAt: new Date(1993, 1, 1),
    stock: 12
  });

  addProduct({
    title: 'Pro1',
    createdAt: new Date(2025, 1, 28),
    stock: 12,
    size: 'XL'
  });

  console.log(products);//no produce error ya que el parametro eds valido
  // products.push(55444) produce error por que fue declarado como products, cuando estaba declarado como AnalyserNode, no producia error (linea 13)
  // products.push('dygarg') produce error por que fue declarado como products, cuando estaba declarado como AnalyserNode, no producia error (linea 13)
  // products.push({}) Produce error aunque es un objeto no cumple con el contenido del objeto

})();
