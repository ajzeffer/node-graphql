"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
const graphql_1 = require("graphql");
const ManufacturerType_1 = __importDefault(require("./ManufacturerType"));
const ManufacturerService_1 = require("../services/ManufacturerService");
let manufacturerService = new ManufacturerService_1.ManufacturerService();
// product mapping
const ProductType = new graphql_1.GraphQLObjectType({
    name: 'Product',
    description: "Products form the store",
    fields: () => ({
        name: { type: graphql_1.GraphQLID },
        description: { type: graphql_1.GraphQLString },
        price: { type: graphql_1.GraphQLString },
        manufacturer: {
            type: ManufacturerType_1.default,
            resolve(parent, args) {
                console.log(`parent > ${parent}`);
                return manufacturerService.GetById(parent.manufacturerId);
            }
        }
    })
});
module.exports = ProductType;
