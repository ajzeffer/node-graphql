import { GraphQLSchema } from 'graphql';
import Query from './Query';

const schema = new GraphQLSchema({
    query: Query,
    //mutation: Mutation
})
export = schema;
