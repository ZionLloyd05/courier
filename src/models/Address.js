const mongoose = require('mongoose')
const Schema = mongoose.Schema

// Creating Address Model
const AddressSchema = new Schema({
    name: {
        type: String,
        required: true,
        max: 50
    },
    street: {
        type: String,
        required: true
    },
    city: {
        type: String,
        required: true
    },
    state: {
        type: String,
        required: true
    },
    country: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    is_resident: {
        type: Boolean,
        required: true
    },
    metadata: {
        type: String
    }
}, {
    timestamps: true
})

module.exports = Address = mongoose.model('address', AddressSchema)