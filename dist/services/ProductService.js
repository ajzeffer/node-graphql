"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ProductsService {
    constructor() {
        this.products = [
            { price: 10, name: 'Dinosaur Egg', id: 1, description: "Cool Dinosaur egg" },
            { price: 5, name: 'Dinosaur Doll', id: 2, description: "My Dinosaur Doll!" },
            { price: 324, name: 'Dinosaur Leg', id: 3, description: "My cool leg stuff" },
            { price: 24, name: 'Dinosaur Tree', id: 4, description: "Dinosaur tree" },
        ];
    }
    configTypeDefs() {
        let typeDefs = `
          type Product {
            name: String,
            description: String,
            id: Int,
            price: Int
          } `;
        typeDefs += `
          extend type Query {
          products: [Product]
        }
        `;
        typeDefs += `
          extend type Mutation {
            product(name:String, id:Int, description: String, price: Int): Product!
          }`;
        return typeDefs;
    }
    configResolvers(resolvers) {
        resolvers.Query.products = () => {
            return this.products;
        };
        resolvers.Mutation.product = (_, product) => {
            this.products.push(product);
            return product;
        };
    }
}
exports.ProductsService = ProductsService;
