"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Users_1 = require("../models/Users");
class UsersService {
    constructor() {
        this.users = [
            new Users_1.User(1, "adam", "zeffer", "az@prodiginet.com", "12asfsf", 1),
            new Users_1.User(2, "james", "zeffer", "jj@prodiginet.com", "12asfsf", 2),
            new Users_1.User(3, "john", "zeffer", "jp@prodiginet.com", "12asfsf", 2),
            new Users_1.User(4, "paul", "zeffer", "paul@prodiginet.com", "12asfsf", 1),
            new Users_1.User(5, "ringo", "zeffer", "ringo@prodiginet.com", "12asfsf", 3),
        ];
    }
    GetUserById(id) {
        return this.users.filter(x => x.id === id)[0];
    }
    GetAll() {
        return this.users;
    }
    GetUserByPermission(permLevel) {
        return this.users.filter(x => x.permissionLevel === permLevel);
    }
}
exports.UsersService = UsersService;
