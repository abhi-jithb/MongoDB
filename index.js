const express = require("express");
const dotenv = require("dotenv");
const DbConnection = require("./databaseConnection");

const userRouter = require('./routes/users');
const booksRouter = require('./routes/books');

dotenv.config();
const app = express();
const PORT = 8081;

DbConnection();


app.use(express.json());
// http:/ / localhost: 8081 /
app.get("/", (req, res) => {
    res.status(200).json({
        message: "Welcome to the API!!",
    });
});
app.use("/users", userRouter);
app.use("/books", booksRouter);


app.get("*", (req, res) => {
    res.status(404).json({
        message: "This route doesn't exist!!!",
    });
});
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
