const express = require("express");
const userController = require("../controller/user");
const userRouter = express.Router();

userRouter // here we have chained all the method's
	.post("/", userController.createUser)
	.get("/", userController.getAllUser)
	.get("/:id", userController.getUser)
	.put("/:id", userController.replaceUser)
	.patch("/:id", userController.updateUser)
	.delete("/:id", userController.deleteUser);

module.exports = {
	userRouter,
};
