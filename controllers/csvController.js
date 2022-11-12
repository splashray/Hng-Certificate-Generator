const path = require("path");
const fs = require("fs");

const handleCsv = async (req, res) => {
  const files = req.files;
  if (files) {
    const file = files.file;
    const fileName = files.file.name;
    const directory = "../uploads";
    if (!fs.existsSync([directory])) {
      //starting point, directory is expected not to exist, so make directory.
      fs.rmSync("uploads", { recursive: true }, (err) => {
        //delete directory to make sure it does not exist. To avoid having more than 1 file in directory
        if (err) throw err;
      });
      fs.mkdirSync("uploads"); //creates or recreates directory depending on the state of directory
    }
    const filePath = path.join(__dirname, directory, fileName);

    file.mv(filePath, (err) => {
      //save file in uploads directory
      if (err) {
        res.status(500).json({ error: err });
      } else {
        res.status(200).json({ message: "file uploaded" });
      }
    });
  }
};

module.exports = { handleCsv };
