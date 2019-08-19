import express from 'express';
import graphqlHTTP from 'express-graphql';
import schema from './schema/schema';

const app: express.Application = express();
const port: number = 3000;

app.use(
    '/graphql',
    graphqlHTTP({
        schema: schema,
        graphiql: true
    })
);
app.listen(port, () => console.log(`graphql is listening on ${port}`));