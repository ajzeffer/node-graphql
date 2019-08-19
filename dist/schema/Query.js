"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
const graphql_1 = require("graphql");
const UserType_1 = __importDefault(require("./UserType"));
const ProductType_1 = __importDefault(require("./ProductType"));
const ProductService_1 = require("../services/ProductService");
const UsersService_1 = require("../services/UsersService");
// service resolvers
const productService = new ProductService_1.ProductsService();
const userService = new UsersService_1.UsersService();
// Query
const Query = new graphql_1.GraphQLObjectType({
    name: 'Query',
    fields: {
        user: {
            type: UserType_1.default,
            args: { id: { type: graphql_1.GraphQLID } },
            resolve(parent, args) {
                return userService.GetUserById(args.id);
            }
        },
        product: {
            type: ProductType_1.default,
            args: { id: { type: graphql_1.GraphQLID } },
            resolve(parent, args) {
                return productService.GetById(args.id);
            }
        },
        products: {
            type: new graphql_1.GraphQLList(ProductType_1.default),
            resolve(parent, args) {
                return productService.GetAll();
            }
        },
        users: {
            type: new graphql_1.GraphQLList(UserType_1.default),
            resolve(parent, args) {
                return userService.GetAll();
            }
        }
    }
});
module.exports = Query;
