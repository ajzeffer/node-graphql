import { GraphQLObjectType, GraphQLString, GraphQLID, GraphQLInt, graphqlSync } from 'graphql';
import { Product } from '../models/Product';
import { Manufacturer } from '../models/Manufacturer';
import ManufacturerType from './ManufacturerType'
import { ManufacturerService } from '../services/ManufacturerService';

let manufacturerService = new ManufacturerService();
// product mapping
const ProductType = new GraphQLObjectType<Product>({
    name: 'Product',
    description: "Products form the store",
    fields: () => ({
        name: { type: GraphQLID },
        description: { type: GraphQLString },
        price: { type: GraphQLString },
        inventoryId: { type: GraphQLString },
        manufacturer: {
            type: ManufacturerType,
            resolve(parent, args) {
                console.log(`parent > ${parent}`);
                return manufacturerService.GetById(parent.manufacturerId);

            }
        }
    }
    )
});

export = ProductType;
