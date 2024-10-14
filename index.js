const express = require('express');
const app = express();
const mongoose = require('mongoose');
require('dotenv').config()
const PORT = process.env.PORT || 5000;
const docterRouter = require('./routes/docterRoutes.js');
const patientRouter = require('./routes/patientRoute.js');
const appointment = require('./routes/appointmentRoute.js');


require('./db/dbconnection.js');


// Middleware
app.use(express.json());

app.use("/api/docter", docterRouter);
app.use("/api/patient", patientRouter);
app.use("/api/booking", appointment);

// Sample route
app.get('/', (req, res) => {
    res.send('Hello, World!');
});
  

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
