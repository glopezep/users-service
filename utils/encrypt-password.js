'use strict'

const bcrypt = require('bcrypt')

const saltRounds = 10

module.exports = async function encryptPassword (password) {
  return bcrypt.hash(password, saltRounds)
}
