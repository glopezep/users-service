'use strict'

module.exports = function parse (json = {}) {
  return JSON.parse(JSON.stringify(json))
}
