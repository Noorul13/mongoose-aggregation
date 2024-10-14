const mongoose = require('mongoose');

const { Schema } = mongoose;

// Define the schema for appointments
const appointmentSchema = new Schema({
  doctorId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'Doctor', // Assuming you have a Doctor model
  },
  patientId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'Patient', // Assuming you have a Patient model
  },
  reason: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now
  },
});

// Create the model
const Appointment = mongoose.model('Appointment', appointmentSchema);

module.exports = Appointment;
