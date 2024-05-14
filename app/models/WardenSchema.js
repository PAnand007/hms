import mongoose from 'mongoose';

const { Schema } = mongoose;

// Define Warden schema
const wardenSchema = new Schema({
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

// Create Warden model
const Warden = mongoose.model('Warden', wardenSchema);

export default Warden;
