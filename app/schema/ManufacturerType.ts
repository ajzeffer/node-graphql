import { GraphQLObjectType, GraphQLString, GraphQLID, GraphQLInt } from 'graphql';
import { Product } from '../models/Product';
import { Manufacturer } from '../models/Manufacturer';
//product mapping
const ManufacturerType = new GraphQLObjectType<Manufacturer>({
    name: 'Manufacturer',
    description: "Manufacturer of the products",
    fields: () => ({
        Id: { type: GraphQLID },
        Name: { type: GraphQLString },
        Location: { type: GraphQLString }
    }
    )
});

export = ManufacturerType;
