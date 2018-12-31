'use strict'

const path = require('path')
const BaseDataSource = require('./base')
const utils = require('@local/utils')
const { NotFound } = require('../errors')

class UserAPI extends BaseDataSource {
  constructor ({ store, secret }) {
    const modelName = path.basename(__filename, '.js')
    super({ store, secret, model: modelName })
  }

  async login ({ username, password }) {
    const user = await this.store.user.findOne({
      username
    })

    if (!user) {
      return false
    }

    const auth = await utils.comparePassword(password, user.dataValues.password)

    if (!auth) {
      return false
    }

    return true
  }
}

module.exports = UserAPI
