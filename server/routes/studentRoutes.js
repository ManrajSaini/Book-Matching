const express = require("express");
const studentController = require("../controllers/studentController");

// Express Router
studentRouter = express.Router(); 

// Fetch all books based on personality and input traits
studentRouter.post("/add-traits", studentController.addTraits);


module.exports = studentRouter;