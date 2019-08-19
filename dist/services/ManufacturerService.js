"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ManufacturerService {
    constructor() {
        this.manufacturers = [
            { Id: 1, Name: 'Dell', Location: 'USA' },
            { Id: 2, Name: 'HP', Location: 'USA' },
            { Id: 3, Name: 'Blue Bonet', Location: 'USA' },
            { Id: 4, Name: 'Apple', Location: 'Mexico' },
        ];
    }
    GetAll() {
        return this.manufacturers;
    }
    GetById(id) {
        let manu = this.manufacturers.filter(x => x.Id === id)[0];
        console.log(manu);
        return manu;
    }
}
exports.ManufacturerService = ManufacturerService;
