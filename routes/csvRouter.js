const express = require('express');
const router = express.Router();
const csvController = require('../controllers/csvController');
const fileExtLimiter = require("../middleware/fileExtLimiter"); //middleware to enforce .csv extension on download endpoint
const filesPayloadExists = require("../middleware/filePayLoadExist"); //middleware to enforce payload on upload endpoint

router.post('/',filesPayloadExists, fileExtLimiter, csvController.handleCsv);

module.exports = router;