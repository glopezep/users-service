'use strict'

const UserAPI = require('./user')

module.exports = function dataSources (options) {
  return function _dataSources () {
    return {
      userApi: new UserAPI(options)
    }
  }
}
