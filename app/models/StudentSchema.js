import mongoose from 'mongoose';

const { Schema } = mongoose;

// Define Student schema
const studentSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    photo: String,
    gender: String,
    bloodGroup: String,
    institute: {
        type: Schema.Types.ObjectId,
        ref: 'Institute',
        required: true
    },
    hostel: {
        type: Schema.Types.ObjectId,
        ref: 'Hostel',
        required: true
    },
    address: String,
    city: String,
    pincode: String,
    state: String,
    semester: String,
    regNo: String,
    branch: String,
    mobile: String,
    email: String,
    fatherName: String,
    fatherPhone: String,
    linkedin: String,
    twitter: String
});

// Create Student model
const Student = mongoose.model('Student', studentSchema);

export default Student;
