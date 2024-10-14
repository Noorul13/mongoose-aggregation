const express = require('express');

const router = express.Router();

const mongoose = require('mongoose');

const Docter = require("../models/docterModel.js");
const Patient = require("../models/patientModel.js");
const { inserpatient } = require('../controllers/patientController.js');


// insertPatient
router.post('/inserpatient', inserpatient);


module.exports = router