// const middlewares = require('../middlewares')
const {
    Router
} = require('express')
const route = Router()

module.exports = (app) => {
    app.use('/orders', route)

    route.get('/', async (req, res) => {
        return res.send('heyo')
    })

}