'use strict'

const { gql } = require('apollo-server')

const typeDef = gql`
  type Query {
    _: String
  }

  type Mutation {
    _: String
  }

  interface MutationResponseInterface {
    code: String!
    success: Boolean!
    message: String!
  }
`

const resolvers = {}

module.exports = {
  typeDef,
  resolvers
}
