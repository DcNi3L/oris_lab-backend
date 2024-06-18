const express = require('express');
const addressController = require('../controllers/addressController');

const router = express.Router();

router.post('/save', addressController.saveToDB);
router.get('/get', addressController.getAddress);

module.exports = router;
