const path = require("path");
const fs = require("fs");
const csvToJson = require("csvtojson");

const handleCsv = async (req, res) => {
  const files = req.files;

  if (files) {
    const file = files.file;
    
    // Convert the buffered csv data to readable format
    const csvData = Buffer.from(file.data).toString();

    // convert csvData to JSON and send back to client
    const jsonOutput = await csvToJson().fromString(csvData);
    
    return res.status(200).json( jsonOutput ).end();
  }

  return res.status(400).end();
};

module.exports = { handleCsv };
