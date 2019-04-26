const {
    Router
} = require('express')
const order = require('./order')

const app = Router()
order(app)

module.exports = app