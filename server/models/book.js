const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    cost: {
        type: String,
        required: true
    },
    stock: {
        type: String,
        required: true
    },
    star: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    criteria: {
        genre: {
            type: String,
            required: true
        },
        popularity: {
            type: String,
            required: true
        },
        length: {
            type: String,
            required: true
        },
        complexity: {
            type: String,
            required: true
        }
    }
});

const Book = mongoose.model("Book", bookSchema);

module.exports = Book;