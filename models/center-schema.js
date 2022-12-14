const mongoose = require('mongoose')

const Schema = mongoose.Schema


const Center = new Schema({
    name: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    
    location: {
        lat: {
            type: Number,
            required: true
        },
        lng: {
            type: Number,
            required: true
        }
    }
})

module.exports = mongoose.model('Center', Center)