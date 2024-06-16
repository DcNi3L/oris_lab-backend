const express = require('express');
const addressController = require('../controllers/addressController');

const router = express.Router();

router.get('/account', addressController.getInfo);
router.post('')

module.exports = router;
