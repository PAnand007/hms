import mongoose from 'mongoose';

const { Schema } = mongoose;

// Define Staff schema
const staffSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
    photo: String,
    hostel: {
        type: Schema.Types.ObjectId,
        ref: 'Hostel',
        required: true
    }
});

// Create Staff model
const Staff = mongoose.model('Staff', staffSchema);

export default Staff;
