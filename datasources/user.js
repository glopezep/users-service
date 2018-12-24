'use strict'

const { DataSource } = require('apollo-datasource')
const { NotFound } = require('../errors')
const utils = require('../utils')

class UserAPI extends DataSource {
  constructor ({ store }) {
    super()
    this.store = store
  }

  initialize (config) {
    this.context = config.context
  }

  async create (user) {
    return this.store.user.create(user)
  }

  async findOrCreate (user) {
    await this.store.user.findOrCreate(user)
  }

  async findOne (options) {
    return this.store.user.findOne(options)
  }

  async findAll (options) {
    return this.store.user.findAll(options)
  }

  async update (options) {
    const payload = { ...options.payload }
    const args = options
    delete args.user

    const user = await this.store.user.findOne({
      ...args
    })

    await user.update(payload)

    return user
  }

  async destroy (options) {
    const user = await this.store.user.findOne({
      ...options
    })

    if (!user) {
      return new NotFound('user not found')
    }

    const copy = utils.parse(user)
    await user.destroy()
    return copy
  }
}

module.exports = UserAPI
