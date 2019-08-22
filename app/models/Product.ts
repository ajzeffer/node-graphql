import { Manufacturer } from "./Manufacturer";

export class Product {
    public id: Number = 0;
    public name: String = '';
    public description: String = '';
    public price: Number = 0;
    public manufacturerId: Number = 0;
    public inventoryId: Number = 0;

    constructor(productId: Number,
        productName: String,
        productDescription: String,
        price: Number,
        manufacturerId: Number,
        inventoryId: Number
    ) {
        this.id = productId;
        this.name = productName;
        this.description = productDescription;
        this.price = price;
        this.manufacturerId = manufacturerId;
        this.inventoryId = inventoryId;

    }

}