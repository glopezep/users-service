'use srict'

const jwt = require('jsonwebtoken')

module.exports = function verifyToken (token, secret, options) {
  return new Promise((resolve, reject) => {
    jwt.verify(token, secret, options, (err, decoded) => {
      if (err) {
        return reject(err)
      }

      resolve(decoded)
    })
  })
}
