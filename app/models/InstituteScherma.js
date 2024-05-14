import mongoose from 'mongoose';

const { Schema } = mongoose;

// Define Institute schema
const instituteSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    university: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    city: {
        type: String,
        required: true
    },
    pincode: {
        type: String,
        required: true
    },
    state: {
        type: String,
        required: true
    },
    phoneNumber: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    linkedin: String,
    twitter: String,
    website: String,
    hostels: [{
        type: Schema.Types.ObjectId,
        ref: 'Hostel'
    }]
});

// Create Institute model
const Institute = mongoose.model('Institute', instituteSchema);

export default Institute;
