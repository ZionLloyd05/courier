const config = require('./config')
const express = require('express')

async function startServer() {
    const app = express()

    await require('./loaders')(app)

    app.listen(config.port, err => {
        if (err) {
            console.log(err)
            process.exit(1)
            return
        }
        console.log('################################################')
        console.log(' 🛡️  Server listening on port: ', config.port, ' 🛡️ ')
        console.log('################################################')
    })
}

startServer()