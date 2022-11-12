const path = require("path");
const fs = require("fs");

const handleCsv = async (req, res) => {
  const files = req.files;
  if (files) {
    const file = files.file;
    const fileName = files.file.name;
    const directory = "../uploads";
    if (!fs.existsSync([directory])) {  //starting point, directory is expected not to exist, so make directory.
      fs.mkdirSync("uploads");
    }
    const filePath = path.join(__dirname, directory, fileName);

    file.mv(filePath, (err) => {  //save file in uploads directory
      if (err) {
        res.status(500).json({ error: err });
      } else {
        res.status(200).json({ message: "file uploaded" });
      }
    });
  }
};

module.exports = { handleCsv };
