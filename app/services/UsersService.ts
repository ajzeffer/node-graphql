import { User } from "../models/Users";

export class UsersService {
  public users: User[] = [
    new User(1, "adam", "zeffer", "az@prodiginet.com", "12asfsf", 1),
    new User(2, "james", "zeffer", "jj@prodiginet.com", "12asfsf", 2),
    new User(3, "john", "zeffer", "jp@prodiginet.com", "12asfsf", 2),
    new User(4, "paul", "zeffer", "paul@prodiginet.com", "12asfsf", 1),
    new User(5, "ringo", "zeffer", "ringo@prodiginet.com", "12asfsf", 3),
  ];

  public GetUserById(id: Number): User {
    return this.users.filter(x => x.id === id)[0];
  }
  public GetAll(): Array<User> {
    return this.users;
  }
  public GetUserByPermission(permLevel: Number): Array<User> {
    return this.users.filter(x => x.permissionLevel === permLevel);
  }
}