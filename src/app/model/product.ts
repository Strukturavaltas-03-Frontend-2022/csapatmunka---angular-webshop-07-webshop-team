// Product osztály:
// id,
// catId,
// name,
// description,
// image,
// price,
// stock,
// featured,
// active

export class Product {
  [x: string]: any;
  id: number = 0;
  catId: number = 0;
  name: string = '';
  description: string = '';
  image: string = '';
  price: number = 0;
  stock: number = 0;
  featured: string = '';
  active: boolean = false;
}
