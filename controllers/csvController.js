const path = require("path");
const fs = require("fs");
const escapeFilename = require('escape-filename');

const handleCsv = async (req, res) => {
  const files = req.files;
  if (files) {
    const file = files.file;
    const fileName = files.file.name;
    const uploadsDirectory = path.join(__dirname, '..', 'uploads');

    const filePath = path.join( uploadsDirectory, escapeFilename.escape(fileName) );

    try{
      // if file exists, an error is sent back
      if( fs.existsSync(filePath) ){

        return res.status(400).json({ message: "File exists" }).end();

      }

      // if uploads directory does not exist, create it 
      if (!fs.existsSync( uploadsDirectory )) {

        //creates or recreates directory depending on the state of directory
        fs.mkdirSync( uploadsDirectory ); 

      }

      file.mv(filePath, (err) => {
        //save file in uploads directory
        if (err) res.status(500).json({ error: err });
        
        res.status(200).json({ message: "file uploaded" });
      });

    }catch(err){

      res.status(500).json({error: err});

    }

  }
};

module.exports = { handleCsv };
