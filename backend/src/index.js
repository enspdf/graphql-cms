import { ApolloServer, makeExecutableSchema } from "apollo-server";
import models from "./models";

const typeDefs = `
    type Hello {
        message: String!
    }

    type Query {
        sayHello(name: String!): Hello
    }
`;

const resolvers = {
  Query: {
    sayHello: (_, args) => {
      return {
        message: `Hello ${args.name || "World"}`
      };
    }
  }
};

const schema = makeExecutableSchema({
  typeDefs,
  resolvers
});

const apolloServer = new ApolloServer({
  schema,
  context: {
    models
  }
});

models.sequelize.sync({ force: true }).then(() => {
  apolloServer.listen(5000).then(({ url }) => console.log(`Running on ${url}`));
});
