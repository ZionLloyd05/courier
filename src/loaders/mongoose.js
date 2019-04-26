const mongoose = require('mongoose')
const config = require('./src/config')

module.exports = async () => {
    const connection = await mongoose.connect(config.databaseURL, {
        useNewUrlParser: true,
        useCreationIndex: true
    })
    return connection.connection.db
}