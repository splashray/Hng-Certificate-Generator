# Hng-Certificate-Generator

Steps
1. accept post request to endpoint '/upload' which should be a csv file
2. validate that it's a csv file
3. validate size of csv (should not be more than 5mb or it might slow down api response)
4. write csv to file path
5. accept a get request to endpoint '/download' for csv data
6. parse csv to json
7. validate json parameters
8. send response to endpoint