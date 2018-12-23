'use strict'

const resolvers = {
  Query: {
    user (parent, args, context, info) {
      console.log('parent', parent)
      console.log('args', args)
      console.log('context', context)
      console.log('info', info)
      return {}
    },
    users (parent, args, context, info) {
      return []
    }
  },
  Mutation: {}
}

module.exports = resolvers
