import { GraphQLObjectType, GraphQLString, GraphQLSchema, GraphQLID, GraphQLInt, GraphQLList, GraphQLObjectTypeConfig } from 'graphql';
import UserType from './UserType';
import ProductType from './ProductType';
import { ProductsService } from '../services/ProductService'
import { UsersService } from '../services/UsersService';

// service resolvers
const productService = new ProductsService();
const userService = new UsersService();

// Query
const Query = new GraphQLObjectType({
    name: 'Query',
    fields: {
        user: {
            type: UserType,
            args: { id: { type: GraphQLID } },
            resolve(parent, args) {
                return userService.GetUserById(args.id);
            }
        },
        product: {
            type: ProductType,
            args: { id: { type: GraphQLID } },
            resolve(parent, args) {
                return productService.GetById(args.id);
            }   
        },
        products: {
            type: new GraphQLList(ProductType),
            resolve(parent, args) {
                return productService.GetAll();
            }
        },
        users: {
            type: new GraphQLList(UserType),
            resolve(parent, args) {
                return userService.GetAll();

            }
        }
    }
});

export = Query;