const express = require("express");

const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const fileUpload = require("express-fileupload");

const app = express();
const PORT = process.env.port || 3000;

const csvRouter = require("./routes/csvRouter");
const dataRouter = require("./routes/dataRouter");

const fileExtLimiter = require("./middleware/fileExtLimiter");
const filesPayloadExists = require("./middleware/filePayLoadExist");

//middleware
app.use(
  cors({
    origin: "*",
  })
);
app.use(cookieParser());
app.use(express.json());
app.use(bodyParser.json());
app.use(fileUpload());

//routes
app.get("/", (req, res) => {
  res.send("Welcome to Certificate Api");
});

app.use("/api/upload", filesPayloadExists, fileExtLimiter, csvRouter);
app.use("/api/download", dataRouter);

app.listen(PORT, () => {
  console.log(`connected to backend - ${PORT}`);
});
