const {
    Router
} = require('express')
import auth from './routes/order'

const app = Router()
order(app)

module.exports = app