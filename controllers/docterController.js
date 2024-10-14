const mongoose = require('mongoose');

const Docter = require('../models/docterModel.js')
const Patient = require("../models/patientModel.js");

async function insertdocter(req, res){
    const { name, address, gender, specialistField } = req.body;

    const newDocter = new Docter({
        name,
        address,
        gender,
        specialistField
    });

    try {
        const savedDocters = await newDocter.save();
        res.status(201).json(savedDocters);
    } catch (error) {
        res.status(400).send('Error inserting user: ' + error.message);
    }
}

async function insertmanydocter(req, res){
    const docters = req.body; // Expecting an array of user objects

    try {
        const savedDocters = await Docter.insertMany(docters);
        res.status(201).json(savedDocters);
    } catch (error) {
        res.status(400).send('Error inserting users: ' + error.message);
    }
}

module.exports = {insertdocter,insertmanydocter}