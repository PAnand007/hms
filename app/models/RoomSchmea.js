import mongoose from 'mongoose';

const { Schema } = mongoose;

// Define Room schema
const roomSchema = new Schema({
    capacity: {
        type: Number,
        required: true
    },
    vacant: {
        type: Number,
        required: true
    },
    floor: {
        type: Number,
        required: true
    },
    hostel: {
        type: Schema.Types.ObjectId,
        ref: 'Hostel',
        required: true
    },
    ac: {
        type: Boolean,
        default: false
    },
    studyTable: {
        type: Boolean,
        default: false
    },
    chair: {
        type: Boolean,
        default: false
    },
    almira: {
        type: Boolean,
        default: false
    }
});

// Create Room model
const Room = mongoose.model('Room', roomSchema);

export default Room;
