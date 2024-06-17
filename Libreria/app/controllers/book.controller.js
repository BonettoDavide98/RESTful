const Book = require("../models/book.model.js");

// Create and Save a new Book
exports.create = (req, res) => {
    // Validate request
    if (!req.body) {
      res.status(400).send({
        message: "Content can not be empty!"
      });
    }
  
    // Create a Book
    const book = new Book({
      title: req.body.title,
      description: req.body.description,
      published: req.body.published || false
    });
  
    // Save Tutorial in the database
    Book.create(book, (err, data) => {
      if (err)
        res.status(500).send({
          message:
            err.message || "Some error occurred while creating the Book."
        });
      else res.send(data);
    });
};

// Retrieve all Books from the database (with condition).
exports.findAll = (req, res) => {
    const title = req.query.title;

    Book.getAll(title, (err, data) => {
      if (err)
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving books."
        });
      else res.send(data);
    });
};

// Find a single Book with a id
exports.findOne = (req, res) => {
    Book.findById(req.params.id, (err, data) => {
      if (err) {
        if (err.kind === "not_found") {
          res.status(404).send({
            message: `Not found book with id ${req.params.id}.`
          });
        } else {
          res.status(500).send({
            message: "Error retrieving book with id " + req.params.id
          });
        }
      } else res.send(data);
    });
};

// find all published Books
exports.findAllPublished = (req, res) => {
    Book.getAllPublished((err, data) => {
        if (err)
          res.status(500).send({
            message:
              err.message || "Some error occurred while retrieving books."
          });
        else res.send(data);
      });
};

// Update a Book identified by the id in the request
exports.update = (req, res) => {
    // Validate Request
    if (!req.body) {
      res.status(400).send({
        message: "Content can not be empty!"
      });
    }
  
    console.log(req.body);
  
    Book.updateById(req.params.id, new Book(req.body), 
        (err, data) => {
            if (err) {
                if (err.kind === "not_found") {
                    res.status(404).send({
                    message: `Not found book with id ${req.params.id}.`
                    });
                } else {
                    res.status(500).send({
                    message: "Error updating book with id " + req.params.id
                    });
                }
            } else
                res.send(data);
        }
    );
};

// Delete a Book with the specified id in the request
exports.delete = (req, res) => {
    Book.remove(req.params.id, (err, data) => {
      if (err) {
        if (err.kind === "not_found") {
          res.status(404).send({
            message: `Not found book with id ${req.params.id}.`
          });
        } else {
          res.status(500).send({
            message: "Could not delete book with id " + req.params.id
          });
        }
      } else res.send({ message: `Book was deleted successfully!` });
    });
};

// Delete all Books from the database.
exports.deleteAll = (req, res) => {
    Book.removeAll((err, data) => {
      if (err)
        res.status(500).send({
          message:
            err.message || "Some error occurred while removing all books."
        });
      else res.send({ message: `All books were deleted successfully!` });
    });
};
