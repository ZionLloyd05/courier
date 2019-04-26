// import environmental variables from our variables.env file
const dotenv = require("dotenv")


// Set the NODE_ENV to 'development' by default
process.env.NODE_ENV = process.env.NODE_ENV || "development";

const envFound = dotenv.config({
    path: "variables.env"
})

if (!envFound) {
    throw new Error('⚠️  Couldn\'t find .env file  ⚠️')
}

export default {
    /**
     * Pass Dev Port
     */
    port: parseInt(process.env.PORT, 10),

    /**
     * MongoDB string from mlab
     */
    databaseURL: process.env.MONGODB_URI,

    /**
     * JWT Secret sauce
     */
    jwtSecret: process.env.JWT_SECRET,

    /**
     * API configs
     */
    api: {
        prefix: "/api"
    }
}