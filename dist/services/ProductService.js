"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ProductsService {
    constructor() {
        this.products = [
            { price: 10, name: 'Dinosaur Egg', id: 1, description: "Cool Dinosaur egg", manufacturerId: 1 },
            { price: 5, name: 'Dinosaur Doll', id: 2, description: "My Dinosaur Doll!", manufacturerId: 2 },
            { price: 324, name: 'Dinosaur Leg', id: 3, description: "My cool leg stuff", manufacturerId: 1 },
            { price: 24, name: 'Dinosaur Tree', id: 4, description: "Dinosaur tree", manufacturerId: 3 },
        ];
    }
    GetAll() {
        return this.products;
    }
    GetById(id) {
        return this.products.filter(p => p.id === id)[0];
    }
}
exports.ProductsService = ProductsService;
