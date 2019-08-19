"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Product {
    constructor(productId, productName, productDescription, price, manufacturerId) {
        this.id = 0;
        this.name = '';
        this.description = '';
        this.price = 0;
        this.manufacturerId = 0;
        this.id = productId;
        this.name = productName;
        this.description = productDescription;
        this.price = price;
        this.manufacturerId = manufacturerId;
    }
}
exports.Product = Product;
