import { ApolloServer } from 'apollo-server';
import { ApolloServerPluginLandingPageLocalDefault } from 'apollo-server-core';

import { Schema } from './graphql/schema.js';
import { PokemonResolvers } from "./resolvers/PokemonResolvers.js";

const resolvers = {
    Query: {
        ...PokemonResolvers.Query
    },
  };


const server = new ApolloServer({
typeDefs:Schema,
resolvers,
csrfPrevention: true,
cache: 'bounded',

plugins: [
    ApolloServerPluginLandingPageLocalDefault({ embed: true }),
],
});

server.listen().then(({ url }) => {
console.log(`🚀  Server ready at ${url}`);
});