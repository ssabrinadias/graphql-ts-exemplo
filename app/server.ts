/* eslint-disable no-console */
import { ApolloServer } from 'apollo-server-express';
import * as Express from 'express';
import 'reflect-metadata';
import { buildSchema } from 'type-graphql';

// resolvers
import UserResolver from './resolvers/User';
import WalletResolver from './resolvers/Wallet';

const main = async () => {
  const schema = await buildSchema({
    resolvers: [UserResolver, WalletResolver],
    emitSchemaFile: true,
    validate: false,
  });

  const server = new ApolloServer({ schema });
  const app = Express();
  server.applyMiddleware({ app });
  app.listen({ port: 4000 }, () => console.log(
    `Server run and listening at ==> http://localhost:4000${server.graphqlPath}`,
  ));
};
main().catch((error) => {
  // eslint-disable-next-line no-console
  console.log(error, 'error');
});
