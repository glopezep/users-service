'use strict'

const { DataSource } = require('apollo-datasource')
const { NotFound } = require('../errors')
const utils = require('../utils')

class UserAPI extends DataSource {
  constructor ({ store, secret }) {
    super()
    this.store = store
    this.secret = secret
  }

  initialize (config) {
    this.context = config.context
  }

  async create (user) {
    user.password = await utils.encryptPassword(user.password)

    return this.store.user.create(user)
  }

  async findOrCreate (user) {
    user.password = utils.encrypt(user.password)

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

  async login ({ username, password }) {
    const user = await this.store.user.findOne({
      username
    })

    if (!user) {
      return NotFound('Username or password incorrect')
    }

    const auth = await utils.comparePassword(password, user.dataValues.password)

    if (!auth) {
      return NotFound('Username or password incorrect')
    }

    return utils.signToken({ username: user.dataValues.username }, this.secret, {})
  }
}

module.exports = UserAPI
