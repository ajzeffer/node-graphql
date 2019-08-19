export class Manufacturer {
    public Name = '';
    public Location = '';
    public Id = 0;
    constructor(id: number, name: string, location: string) {
        this.Id = id;
        this.Name = name;
        this.Location = location;
    }
}