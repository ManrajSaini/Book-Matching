const express = require("express");
const bookController = require("../controllers/bookController");

// Express Router
bookRouter = express.Router(); 

// Fetch all books based on personality and input traits
bookRouter.get("/get-books", bookController.getBooks);


module.exports = bookRouter;