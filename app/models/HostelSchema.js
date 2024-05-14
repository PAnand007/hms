import mongoose from 'mongoose';

const { Schema } = mongoose;

// Define Hostel schema
const hostelSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    institute: {
        type: Schema.Types.ObjectId,
        ref: 'Institute',
        required: true
    },
    beds: {
        type: Number,
        required: true
    },
    isBoys: {
        type: Boolean,
        required: true
    },
    floors: {
        type: Number,
        required: true
    },
    rooms: {
        type: Number,
        required: true
    },
    wardens: [{
        type: Schema.Types.ObjectId,
        ref: 'Warden'
    }],
    students: [{
        type: Schema.Types.ObjectId,
        ref: 'Student'
    }],
    staff: [{
        type: Schema.Types.ObjectId,
        ref: 'Staff'
    }],
    hostelFacility: {
        type: Schema.Types.ObjectId,
        ref: 'HostelFacility'
    }
});

// Create Hostel model
const Hostel = mongoose.model('Hostel', hostelSchema);

export default Hostel;
