const express = require("express");
const userController = require("../controllers/users.js");
const router = express.Router();

router.get("/", userController.returnHello);

module.exports = router;
