'use strict'

const bcrypt = require('bcrypt')

module.exports = async function comparePassword (password, hash) {
  return bcrypt.compare(password, hash)
}
