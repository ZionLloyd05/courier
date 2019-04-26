const middlewares = require('../middlewares')
const route = Router()

module.exports = (app) => {
    app.use('/orders', route)

    route.get('/', async (req, res) => {
        return res.json({
            user: req.currentUser
        }).status(200);
    })

}