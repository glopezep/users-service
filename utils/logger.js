'use strict'

const bole = require('bole')
const chalk = require('chalk')
const through = require('through2')
const streamFile = require('stream-file-archive')

const levels = {
  info: chalk.green,
  error: chalk.red,
  warn: chalk.yellow,
  debug: chalk.magenta
}

const rotator = streamFile({
  path: `logs/%Y-%m-%d.log`,
  symlink: 'logs/current.log',
  compress: true
})

const formatter = through((chunk, _, callback) => {
  try {
    let { id, level, name, message } = JSON.parse(chunk)
    const color = levels[level]
    id = id ? ` ${chalk.blue(id)} ` : ' '
    message = typeof message === 'object' ? JSON.stringify(message, null, 2) : message
    console.log(`${color(level)}${id}(${chalk.cyan(name)}) ${message}`)
    callback(null, chunk)
  } catch (err) {
    callback(err)
  }
})

bole.output({
  level: process.env.DEBUG ? 'debug' : 'info',
  stream: process.env.NODE_ENV === 'production' ? rotator : formatter
})

function getLogger (name) {
  return bole(name)
}

module.exports = getLogger
