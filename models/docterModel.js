const mongoose = require('mongoose');

const { Schema } = mongoose;

// Define the schema
const doctorSchema = new Schema({
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
  specialistField: {
    type: String,
    required: true,
  },
});

// Create the model
const Doctor = mongoose.model('Doctor', doctorSchema);

module.exports = Doctor;
