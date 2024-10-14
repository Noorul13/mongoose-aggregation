const mongoose = require('mongoose');

const Appointment = require('../models/bookingModel.js');

async function appointments(req, res){
    try {
      const { doctorId, patientId, reason } = req.body;
  
      if (!doctorId || !patientId || !reason) {
        return res.status(400).json({ message: 'doctorId, patientId, and reason are required.' });
      }
  
      const newAppointment = new Appointment({
        doctorId,
        patientId,
        reason,
      });
  
      await newAppointment.save();
      res.status(201).json({ message: 'Appointment created successfully!', appointment: newAppointment });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: Error.message });
    }
}


async function patientCount(req, res){
    try {
      const results = await Appointment.aggregate([
        // group by patient count
        // {
        //   $group: {
        //     _id: "$doctorId", // Group by doctor ID
        //     patientCount: { $sum: 1 } // Count the number of patients
        //   }
        // },


        // lookup method
        // {
        //   $lookup: {
        //     from: 'doctors', // The name of the doctors collection
        //     localField: 'doctorId',
        //     foreignField: '_id',
        //     as: 'doctorInfo'
        //   }
        // },
        // match with lookup

        {
          $lookup: {
            from: 'doctors', // The name of the doctors collection
            localField: 'doctorId',
            foreignField: '_id',
            as: 'docterInfo'
          }
        }, {
            $match:{
                "docterInfo.gender" : "male"
            }
        }
        
      ]);
  
      res.status(200).json(results);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Error fetching doctor patient count', error });
    }
}

module.exports = {appointments,patientCount}