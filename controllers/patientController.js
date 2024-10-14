const mongoose = require('mongoose');

const Docter = require('../models/docterModel.js')
const Patient = require("../models/patientModel.js");


async function inserpatient(req, res) {
    const { name, gender, address } = req.body;

    const newPatient = new Patient({
        name,
        gender,
        address,
    });

    try {
        const savedPatient = await newPatient.save();
        res.status(201).json(savedPatient);
    } catch (error) {
        res.status(400).send('Error inserting user: ' + error.message);
    }
}

module.exports = {inserpatient};