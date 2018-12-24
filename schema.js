'use strict'

const { gql } = require('apollo-server')

const typeDefs = gql`
  type Query {
    users: [User]!
    user(id: Int, username: String): User
  }

  type Mutation {
    createUser(user: UserInput!): User!
    updateUser(userId: Int, username: String, payload: UserInputUpdate!): User!
    deleteUser(userId: Int, username: String): User
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

  input UserInput {
    firstName: String!
    lastName: String
    email: String!
    username: String!
    password: String!
  }

  input UserInputUpdate {
    firstName: String
    lastName: String
    email: String
    username: String
    password: String
  }
`

module.exports = typeDefs
