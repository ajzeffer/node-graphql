import { GraphQLObjectType, GraphQLString, GraphQLID, GraphQLInt } from 'graphql';

// user mapping
const UserType = new GraphQLObjectType({
    name: 'User',
    fields: () => ({
        id: { type: GraphQLID },
        name: { type: GraphQLString },
        age: { type: GraphQLInt }
    })
});

export = UserType;