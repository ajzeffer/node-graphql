"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const express_graphql_1 = __importDefault(require("express-graphql"));
const schema_1 = __importDefault(require("./schema/schema"));
const app = express_1.default();
const port = 3000;
app.use('/graphql', express_graphql_1.default({
    schema: schema_1.default,
    graphiql: true
}));
app.listen(port, () => console.log(`graphql is listening on ${port}`));
