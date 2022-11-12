const isValidJsonOutput = (data) => {
    const headers = ["name", "organization", "award", "description", "date", "certificate_number"];

    // Check to see if every row has complete set of values
    const validResponse = data.every(jsonObj => {
        return headers.every(header => (jsonObj[header] !== ''));
    });

    return validResponse;
}

module.exports = {
    isValidJsonOutput
}