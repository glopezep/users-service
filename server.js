'use strict'

const { ApolloServer } = require('apollo-server')
const typeDefs = require('./schema')
const resolvers = require('./resolvers')
const dataSources = require('./datasources')
const store = require('./db/models')
const { secret } = require('./config')

const port = process.env.PORT || 5000

const server = new ApolloServer({
  typeDefs,
  resolvers,
  dataSources: dataSources({ store, secret })
})

server.listen(port, () => {
  console.log(`Server listening on port http://localhost:${port}`)
})
