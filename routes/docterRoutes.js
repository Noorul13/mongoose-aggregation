const express = require('express');

const router = express.Router();

const mongoose = require('mongoose');

const { insertdocter, insertmanydocter } = require('../controllers/docterController.js');


router.post('/insertdocter', insertdocter);

// insert many user
router.post('/insertmanydocter', insertmanydocter);


module.exports = router
