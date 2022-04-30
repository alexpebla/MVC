const express = require("express");
const mainController = require("../controllers/MainController");
const AboutController = require("../controllers/AboutController");
const router = express.Router()

router.get("/", mainController.main)

router.get("/about", AboutController.index )

module.exports = router;