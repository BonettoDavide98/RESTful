module.exports = app => {
    const books = require("../controllers/book.controller.js");
  
    var router = require("express").Router();

    // Create a new book
    router.post("/", books.create);
  
    // Retrieve all books
    router.get("/", books.findAll);
  
    // Retrieve all published books
    router.get("/published", books.findAllPublished);
  
    // Retrieve a single book with id
    router.get("/:id", books.findOne);
  
    // Update a book with id
    router.put("/:id", books.update);

    // Delete all book
    router.delete("/", books.deleteAll);
  
    // Delete a book with id
    router.delete("/:id", books.delete);
  
    app.use('/api/books', router);
  };