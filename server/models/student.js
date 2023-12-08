const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    criteria: {
        personality: {
            type: String,
            required: true
        },
        genrePref: {
            type: String,
            required: true
        },
        readFreq: {
            type: String,
            required: true
        },
        vocabulary: {
            type: String,
            required: true
        }
    }
});

const Book = mongoose.model("Book", bookSchema);

module.exports = Book;