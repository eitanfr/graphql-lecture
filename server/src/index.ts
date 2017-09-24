import { schema } from './schema/schema';
import * as express from 'express';
import { Express } from 'express';
import * as bodyParser from 'body-parser';
import { graphiqlExpress, graphqlExpress } from 'apollo-server-express';
import * as cors from 'cors';

const PORT = 3000;
const app: Express = express();
app.use(cors());

// GraphQL endpoint
app.use('/graphql', bodyParser.json(), graphqlExpress({
  schema,
}));

// Add Graphiql
app.use('/graphiql', graphiqlExpress({
  endpointURL: '/graphql',
  query: ``,
}));

app.listen(PORT, () => console.log(`GraphQL server running on http://localhost:${PORT}/graphql`));
