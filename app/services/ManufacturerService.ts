import { Manufacturer } from "../models/Manufacturer";

export class ManufacturerService {

    private manufacturers: Array<Manufacturer> = [
        { Id: 1, Name: 'Dell', Location: 'USA' },
        { Id: 2, Name: 'HP', Location: 'USA' },
        { Id: 3, Name: 'Blue Bonet', Location: 'USA' },
        { Id: 4, Name: 'Apple', Location: 'Mexico' },
    ];

    public GetAll(): Array<Manufacturer> {
        return this.manufacturers;
    }
    public GetById(id: Number): Manufacturer {
        let manu = this.manufacturers.filter(x => x.Id === id)[0];
        console.log(manu);
        return manu;
    }
}