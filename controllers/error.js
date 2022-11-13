exports.notFound = (req, res, next) => {
    res.status(404).send("Requested page could not be found!")
}