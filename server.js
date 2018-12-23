'use strict'

const { ApolloServer } = require('apollo-server')
const typeDefs = require('./schema')
const resolvers = require('./resolvers')

const port = process.env.PORT || 5000

const server = new ApolloServer({
  typeDefs,
  resolvers
})

server.listen(port, () => {
  console.log(`Server listening on port ${port}`)
})
