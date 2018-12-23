'use strict'

const { gql } = require('apollo-server')

const typeDefs = gql`
  type Query {
    users: [User]!
    user(id: ID, username: String): User
  }

  type Mutation {
    createUser: User
    updateUser: User
    deleteUser: User
  }

  type User {
    firstName: String,
    lastName: String
    email: String
    username: String
    password: String
    createdAt: String,
    updatedAt: String
  }
`

module.exports = typeDefs
