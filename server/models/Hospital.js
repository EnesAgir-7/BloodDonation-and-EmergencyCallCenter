const mongoose = require('mongoose')

const HospitalSchema = new mongoose.Schema({
    hospitalId: {
        type: String,
        required: [true, 'Please add a hospital ID'],
        unique: true,
        trim: true,
        maxlength: [10, 'Hospital ID must be less than 10 chars']
    },
    hospitalName:{
        type: String,
        required: true,
        min: 3,
        max: 20,
        unique: true,
    },
    address: {
        type: String,
        required: [true, 'Please add a hospital address']
    },
    location: {
        type: {
            type: String,
            enum: ['Point']
        },
        coordinates: {
            type: [Number],
            index: '2dsphere'
        },
        formattedAddress: String
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Hospital', HospitalSchema);