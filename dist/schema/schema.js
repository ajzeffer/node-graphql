"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
const graphql_1 = require("graphql");
const Query_1 = __importDefault(require("./Query"));
const schema = new graphql_1.GraphQLSchema({
    query: Query_1.default,
});
module.exports = schema;
