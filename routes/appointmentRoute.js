const express = require('express');

const router = express.Router();

const { appointments, patientCount } = require('../controllers/appointmentController.js');

router.post('/appointments', appointments);


router.get('/doctors/patient-count', patientCount);

module.exports = router