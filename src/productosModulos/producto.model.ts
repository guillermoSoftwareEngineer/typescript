// Se usa export para poder usar la definicion  de estos typos en otros archivos

export type Sizes = 'S' | 'M' | 'L' | 'XL';
export   type Product = {
  title: string,// si se cambia el nombre de tittle a name por ejemplo del valor entonces de inmediato se dispara la alarma en el resto
  // de los archivos, lo que facilita el debbuging
  // lo mismo pasa si cambian de nombres las funciones
  createdAt: Date,
  stock: number,
  size?: Sizes
}
