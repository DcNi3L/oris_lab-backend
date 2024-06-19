const express = require('express');
const txController = require('../controllers/txController');

const router = express.Router();

router.post('/save', txController.saveToDB);
router.get('/get', txController.getTx);
router.get('/all', txController.getAll);

module.exports = router;
