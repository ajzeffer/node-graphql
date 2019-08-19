export class User {
    public id: Number = 0;
    public firstName: String = '';
    public lastName: String = '';
    public email: String = '';
    public password: String = '';
    public permissionLevel: Number = 1;

    constructor(id: Number,
        firstName: String,
        lastName: String,
        email: String,
        password: String,
        permissionLevel: Number) {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.password = password;
        this.permissionLevel = permissionLevel;
    }

}