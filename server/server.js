const dotenv = require("dotenv");
const express = require("express");
const session = require("express-session");
const cors = require("cors");

const connectDB = require("./config/connectDB");
const bookRouter = require("./routes/bookRoutes");
const studentRouter = require("./routes/studentRoutes");

dotenv.config();

const app = express();

app.use(express.json());
app.use(
    session({
        secret: process.env.SECRET_KEY,
        resave: false,
        saveUninitialized: true,
        cookie: {
            maxAge: 3600000,
            httpOnly: true,
            secure: false,
        },
    })
);

app.use(cors({
    origin: true,
    credentials: true
}));

// Connecting to mongo database
connectDB();

// student routes (router)
app.use("/student-api", studentRouter);

// book routes (router)
app.use("/book-api", bookRouter);


// Home Route
app.get("/", (req,res) => {
    return res.send({
        "success": true,
        "error_code": null,
        "message": "Server is Running",
        "data": "Server is Live 🎉"
    });
});

// Server started on Port 8080
app.listen(process.env.PORT, () => {
    console.log("Server is running, Hurray!!");
});