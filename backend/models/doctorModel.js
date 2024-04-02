const mongoose = require('mongoose');

const doctorSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Please provide a name'],
        minlength: 3
    },
    email: {
        type: String,
        trim: true,
        required: [true, 'Please provide an email'],
        unique: true,
        match: [/.+\@.+\..+/, 'Please provide a valid email']
    },
    phone: {
        type: String,
        trim: true,
        required: [true, 'Please provide a phone number'],
        unique: true,
        match: [/^\d{11}$/, 'Please provide a valid phone number']
    },
    address: {
        type: String,
        required: [true, 'Please provide an address']
    },
    speciality: {
        type: String,
        required: [true, 'Please provide a speciality']
    },
    experience: {
        type: Number,
        required: [true, 'Please provide an experience']
    },
    fee: {
        type: Number,
        required: [true, 'Please provide a fee']
    },
    timings: {
        type: String,
        required: [true, 'Please provide timings']
    },
    hospital: {
        type: String,
        required: [true, 'Please provide a hospital']
    },
    reviews: [
        {
            text: {
                type: String,
                required: true
            },
            rating: {
                type: Number,
                required: true
            },
            createdAt: {
                type: Date,
                default: Date.now
            },
            user: {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'User'
            }
        }
    ],
}, { timestamps: true })

const Doctor = mongoose.model('Doctor', doctorSchema);

module.exports = Doctor;