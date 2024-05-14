import mongoose from 'mongoose';

const { Schema } = mongoose;

// Define HostelFacility schema
const hostelFacilitySchema = new Schema({
    ac: {
        type: Boolean,
        default: false
    },
    wifi: {
        type: Boolean,
        default: false
    },
    lift: {
        type: Boolean,
        default: false
    },
    medical: {
        type: Boolean,
        default: false
    },
    cctv: {
        type: Boolean,
        default: false
    },
    gym: {
        type: Boolean,
        default: false
    },
    generator: {
        type: Boolean,
        default: false
    },
    leisure: {
        type: Boolean,
        default: false
    }
});

// Create HostelFacility model
const HostelFacility = mongoose.model('HostelFacility', hostelFacilitySchema);

export default HostelFacility;
