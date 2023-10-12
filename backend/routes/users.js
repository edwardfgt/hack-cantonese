const express = require("express");
const userController = require("../controllers/users.controller");
const usersRouter = express.Router();

usersRouter.post("/", userController.Create);

module.exports = usersRouter;
