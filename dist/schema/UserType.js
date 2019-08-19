"use strict";
const graphql_1 = require("graphql");
// user mapping
const UserType = new graphql_1.GraphQLObjectType({
    name: 'User',
    fields: () => ({
        id: { type: graphql_1.GraphQLID },
        name: { type: graphql_1.GraphQLString },
        age: { type: graphql_1.GraphQLInt }
    })
});
module.exports = UserType;
