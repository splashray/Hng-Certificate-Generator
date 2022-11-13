const express = require('express');
const router = express.Router();
const csvController = require('../controllers/csvController');
const fileExtLimiter = require("../middleware/fileExtLimiter"); //middleware to enforce .csv extension on download endpoint
const filesPayloadExists = require("../middleware/filePayLoadExist"); //middleware to enforce payload on upload endpoint
const fileHeaderChecker = require("../middleware/fileHeaderChecker"); //middleware to check that payload has the right header

router.post('/',filesPayloadExists, fileExtLimiter, fileHeaderChecker,csvController.handleCsv);

module.exports = router;