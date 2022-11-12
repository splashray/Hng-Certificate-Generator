const express = require('express');
const router = express.Router();
const csvController = require('../controllers/csvController');

router.post('/', csvController.handleCsv);

module.exports = router;