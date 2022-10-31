const express = require("express");
const router = express.Router();

const UserController = require("../controllers/product.Controller");

//Get a list of all Users
router.get("/", UserController.getAllUsers);

//Create a new user
router.post("/", UserController.createNewUser);

//Get a User by id
router.get("/:id", UserController.findUserById);

//Update a User by id
router.patch("/:id", UserController.updateAUser);

//Delete a User by id 123hahaha
router.delete("/:id", UserController.deleteAUser);

module.exports = router;
