import { gql } from 'apollo-server';

export const Schema = gql`

  type Pokemon {
    count: Int
    next: String
  }

  type Query {
    get: Pokemon
  }
`;