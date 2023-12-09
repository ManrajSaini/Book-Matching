const Book = require("../models/student");
const Student = require("../models/student");

const matchBookStudent = require("../utils/matchBooks");

// Student login
const login = async (req,res) => {
    const email = req.body.email;
    const password = req.body.password;

    if(!email || !password){
        return res.send({
            "success": false,
            "error_code": 400,
            "message": "Please enter the email and password",
            "data": null
        });
    }

    const oldStudent = await Student.findOne({email: email});

    if(!oldStudent){
        return res.send({
            "success": false,
            "error_code": 400,
            "message": "Please enter the valid email",
            "data": null
        });
    }

    if(oldStudent.password !== password){
        return res.send({
            "success": false,
            "error_code": 400,
            "message": "Please enter the valid password",
            "data": null
        });
    }

    req.session.student = oldStudent;

    return res.send({
        "success": true,
        "error_code": 200,
        "message": "Successfully logged in",
        "data": oldStudent
    });
}

// Adding student traits
const addTraits = async (req,res) => {
    const currGoal = req.body.goal;
    const favQuote = req.body.quote;

    if(!currGoal || !favQuote){
        return res.send({
            "success": false,
            "error_code": 400,
            "message": "Please specify the options",
            "data": null
        });
    }

    const studentDetails = req.session.student;

    const studentOptions = {
        personality : studentDetails.criteria.personality, 
        genrePref : studentDetails.criteria.genrePref, 
        readFreq : studentDetails.criteria.readFreq, 
        vocab : studentDetails.criteria.vocabulary, 
        goal : goal, 
        favQuote : favQuote
    }

    const allBooks = await Book.find();
    const matchedBooks = [];

    allBooks.forEach((book) => {

        const bookOptions = {
            genre: book.criteria.genre,
            popularity: book.criteria.popularity,
            length: book.criteria.length,
            complexity: book.criteria.complexity
        }

        const score = matchBookStudent(studentOptions, bookOptions);

        if(score > 0){
            matchedBooks.push();
        }
    });

    return res.send({
        "success": true,
        "error_code": 200,
        "message": "Fetched all recommended books",
        "data": matchedBooks
    });
};


module.exports = {
    login,
    addTraits
}
