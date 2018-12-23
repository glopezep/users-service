'use strict'

module.exports = {
  db: {
    username: process.env.DB_USERNAME || 'test',
    password: process.env.DB_PASSWORD || 'test',
    database: process.env.DB_NAME || 'users',
    host: process.env.DB_HOST || 'localhost',
    dialect: 'postgres',
    logging: true,
    pool: {
      max: 5,
      idle: 30000,
      acquire: 60000
    }
  }
}
