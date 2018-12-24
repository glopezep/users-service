'use strict'

const resolvers = {
  Query: {
    async user (parent, args, context, info) {
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
      return context.dataSources.userApi.create(args.user)
    },
    async updateUser (parent, args, context, info) {
      return context.dataSources.userApi.update(args)
    },
    async deleteUser (parent, args, context, info) {
      return context.dataSources.userApi.destroy(args)
    },
    async login (parent, args, context, info) {
      return context.dataSources.userApi.login(args)
    }
  },
  User: {
    email (obj, args, context, info) {
      return `${obj.dataValues.email.slice(0, 5)}@.....`
    },
    password (parent, args, context, info) {
      return '.....'
    }
  }
}

module.exports = resolvers
