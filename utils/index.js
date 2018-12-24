'use strict'

const parse = require('./parse')
const encryptPassword = require('./encrypt-password')
const comparePassword = require('./compare-password')
const signToken = require('./sign-token')
const verifyToken = require('./verify-token')

module.exports = {
  parse,
  encryptPassword,
  comparePassword,
  signToken,
  verifyToken
}
