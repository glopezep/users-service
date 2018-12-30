'use strict'

const { typeDef: RootQuery, resolvers: rootQueryResolvers } = require('./rootQuery')
const { typeDef: User, resolvers: userResolvers } = require('./user')

module.exports = {
  typeDefs: [ RootQuery, User ],
  resolvers: Object.assign({}, rootQueryResolvers, userResolvers)
}
