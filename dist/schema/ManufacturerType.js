"use strict";
const graphql_1 = require("graphql");
//product mapping
const ManufacturerType = new graphql_1.GraphQLObjectType({
    name: 'Manufacturer',
    description: "Manufacturer of the products",
    fields: () => ({
        Id: { type: graphql_1.GraphQLID },
        Name: { type: graphql_1.GraphQLString },
        Location: { type: graphql_1.GraphQLString }
    })
});
module.exports = ManufacturerType;
