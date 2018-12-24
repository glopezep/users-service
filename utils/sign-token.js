'use srict'

const jwt = require('jsonwebtoken')

module.exports = function signToken (payload, secret, options) {
  return new Promise((resolve, reject) => {
    jwt.sign(payload, secret, options, (err, encoded) => {
      if (err) {
        return reject(err)
      }

      resolve(encoded)
    })
  })
}
