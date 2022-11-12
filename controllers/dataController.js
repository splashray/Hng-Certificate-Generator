const fs = require("fs");
const csvtojson = require("csvtojson");

const handleData = async (req, res) => {
  const dir = "uploads";
  const file = fs.readdirSync(dir)[0]; //read file from uploads directory. It is expected that the file is the only file in directory

  const csvFilePath = `./uploads/${file}`; //file path instantiation

  const jsonContent = await csvtojson().fromFile(csvFilePath); //convert csv to json using csvtojson package and store in variable
  fs.rm("uploads", { recursive: true }, (err) => { //delete directory afterwards
    if (err) throw err;
  });
  res.json(jsonContent).status(201);
};

module.exports = { handleData };
