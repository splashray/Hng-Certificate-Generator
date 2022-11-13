const csv = require("csv-parser")
const fs = require("fs")
const correctHeader = ["Name", "Name of organization", "Award", "Description", "Date"]

const fileChecker = async (req, res, next) => {
    const file = `${req.files.file.data.slice(0, 1000)}`

    const header = file.split("\r\n")[0].split(",");
    console.log(header, correctHeader)
    if (JSON.stringify(correctHeader) !== JSON.stringify(header)) {
        return res.status(422).json({message: "Invalid csv header!"})
    }
    next()

}

module.exports = fileChecker;