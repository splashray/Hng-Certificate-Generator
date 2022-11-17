const express = require("express");

const path = require('path');
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const fileUpload = require("express-fileupload");

const app = express();
const PORT = process.env.port || 3000;

const csvRouter = require("./routes/csvRouter");
// const dataRouter = require("./routes/dataRouter");

//middleware
app.use(
  cors({
    origin: "*",
  })
);
app.use(cookieParser());
app.use(express.json());
app.use(bodyParser.json());
app.use(fileUpload()); //file upload parser

// This code was added to allow access to the assets in the api-docs folder
app.use(express.static(path.join(__dirname, 'public')));

// swagger api docs rendering
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json');

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

//routes
app.get("/", (req, res) => {
  res.send("Welcome to Certificate Api");
});

app.use("/api/upload", csvRouter);
// app.use("/api/download", dataRouter);

app.listen(PORT, () => {
  console.log(`connected to backend - ${PORT}`);
});
