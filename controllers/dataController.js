const fs = require("fs");
const csvtojson = require("csvtojson");

const handleData = async (req, res) => {
  const dir = "uploads";
  const file = fs.readdirSync(dir)[0];

  const csvFilePath = `./uploads/${file}`

  const jsonContent = await csvtojson().fromFile(csvFilePath);
  console.log(jsonContent);
  fs.rm('uploads', { recursive: true }, (err) => {
    if(err) throw err
  })
  res.json(jsonContent).status(201)
};

module.exports = { handleData };
