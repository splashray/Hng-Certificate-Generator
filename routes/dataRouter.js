const express = require("express");
const router = express.Router();
const dataRouter = require("../controllers/dataController");

router.get("/", dataRouter.handleData);

module.exports = router;
