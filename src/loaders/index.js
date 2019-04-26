const expressLoader = require('./express')
const mongooseLoader = require('./mongoose')

module.exports = async (expressApp) => {

    // Load in Mongo Connection
    await mongooseLoader()
    console.log('✌️ DB loaded and connected!');

    // Load in Express
    await expressLoader(expressApp)
    console.log('✌️ Express loaded');

}