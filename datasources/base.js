'use strict'

const { DataSource } = require('apollo-datasource')
const utils = require('@local/utils')
const { NotFound } = require('../errors')

class Base extends DataSource {
  constructor ({ store, secret, model }) {
    super()
    this.store = store
    this.model = model
  }

  initialize (config) {
    this.context = config.context
  }

  async create (options) {
    return this.store[this.model].create(options.payload)
  }

  async findOne (options) {
    return this.store[this.model].findOne(options)
  }

  async findAll (options) {
    return this.store[this.model].findAll(options)
  }

  async update (options) {
    const payload = { ...options.payload }
    delete options.payload

    const entity = await this.findOne(options)

    if (!entity) {
      return new NotFound(`${this.model} not found`)
    }

    await entity.update(payload)

    return entity
  }
  
  async destroy (options) {
    const payload = { ...options.payload }
    delete options.payload
    const entity = await this.findOne(options)

    if (!entity) {
      return new NotFound(`${this.model} not found`)
    }

    const copy = utils.parse(entity)
    await entity.destroy()

    return copy
  }

}

module.exports = Base
