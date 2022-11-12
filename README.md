# Hng-Certificate-Generator

Documentation
1. accept post request to endpoint '/upload' which should be a csv file
2. validate payload to enforce file on req using filePayLoadExist middleware
3. enforce csv extension using the fileExtLimiter middleware
4. write csv to directory "Uploads"
5. accept a get request to endpoint '/download' for csv data in json format
6. parse csv to json
7. send response to endpoint