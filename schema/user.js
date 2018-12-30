'use strict'

const { gql } = require('apollo-server')

const typeDef = gql`
  extend type Query {
    users: [User]!
    user(id: Int, username: String): User
  }

  extend type Mutation {
    createUser(user: UserInput!): MutationResponse
    updateUser(userId: Int, username: String, payload: UserInputUpdate!): MutationResponse
    deleteUser(userId: Int, username: String): MutationResponse
    login(username: String!, password: String): MutationResponse
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

  type MutationResponse implements MutationResponseInterface {
    code: String!
    success: Boolean!
    message: String!
    user: User
  }
`

const resolvers = {
  Query: {
    user (parent, args, context, info) {
      return context.dataSources.userApi.findOne({
        where: { ...args }
      })
    },
    users (parent, args, context, info) {
      return context.dataSources.userApi.findAll({})
    }
  },

  Mutation: {
    async createUser (parent, args, context, info) {
      const user = await context.dataSources.userApi.create(args.user)

      return {
        code: 200,
        success: true,
        message: 'User was successfully created',
        user
      }
    },
    async updateUser (parent, args, context, info) {
      const user = await context.dataSources.userApi.update(args)

      return {
        code: 200,
        success: true,
        message: 'User was successfully updated',
        user
      }
    },
    async deleteUser (parent, args, context, info) {
      const user = await context.dataSources.userApi.destroy(args)

      return {
        code: 200,
        success: true,
        message: 'User was successfully deleted',
        user
      }
    },
    async login (parent, args, context, info) {
      const auth = await context.dataSources.userApi.login(args)

      return {
        code: 200,
        success: auth,
        message: auth ? 'Login was successfully' : 'Username or password are incorrect'
      }
    }
  },

  User: {
    email (parent, args, context, info) {
      return `${parent.dataValues.email.slice(0, 5)}@.....`
    },
    password (parent, args, context, info) {
      return '.....'
    }
  }
}

module.exports = {
  typeDef,
  resolvers
}
