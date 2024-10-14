const mongoose = require('mongoose');

const { Schema } = mongoose;

// Define the schema
const patientSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  gender: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true
  },
});

// Create the model
const Patient = mongoose.model('Patient', patientSchema);

module.exports = Patient;
