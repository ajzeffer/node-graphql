import { Product } from '../models/Product';
export class ProductsService {

  public products: Array<Product> = [
    { price: 10, name: 'Dinosaur Egg', id: 1, description: "Cool Dinosaur egg", manufacturerId: 1 },
    { price: 5, name: 'Dinosaur Doll', id: 2, description: "My Dinosaur Doll!", manufacturerId: 2 },
    { price: 324, name: 'Dinosaur Leg', id: 3, description: "My cool leg stuff", manufacturerId: 1 },
    { price: 24, name: 'Dinosaur Tree', id: 4, description: "Dinosaur tree", manufacturerId: 3 },
  ];
  public GetAll(): Array<Product> {
    return this.products;
  }

  public GetById(id: Number): Product {
    return this.products.filter(p => p.id === id)[0];
  }

}