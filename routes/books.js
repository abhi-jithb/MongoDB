const express = require("express");
const { getAllBooks, getSingleBookById, getAllIssuedBooks, addNewBook, updateBooksById } = require("../controllers/book-controller");

const { books } = require("../data/books.json");
const { users } = require("../data/users.json");

// exports.router = (req, res) => { express.Router };
const router = express.Router();
const { UserModal, BookModal } = require("../modal/index");



/**
  Route: /books 
  Method: GET
  Description: Get all Books
  Access: Public
  Parameters: None
  */
router.get("/", getAllBooks);

// router.get("/", (req, res) => {
//     res.status(200).json({
//         success: true,
//         message: "Got all Books ✅",
//         data: books,
//     });
// });


/**
  Route: /books/:id
  Method: GET
  Description: Get Books by their Id
  Access: Public
  Parameters: ID
  */

router.get("/:id", getSingleBookById);
// router.get("/:id", (req, res) => {
//     const { id } = req.params;
//     const book = books.find((each) => each.id === id);
//     if (!book) {
//         return res.status(404).json({
//             success: false,
//             message: "Book not Found!!",
//         });
//     }
//     return res.status(200).json({
//         success: true,
//         messsage: "Hurrary 🎉 Book Found",
//         data: book,
//     });
// });



/**
  Route: /books/issued
  Method: GET
  Description: Get all issued books
  Access: Public
  Parameters: None
  */
router.get("/:id", getAllIssuedBooks);
// router.get("/issued", (req, res) => {
//     const userWithIssuedBook = users.filter((each) => {
//         if (each.issuedBook) return each;
//     });

//     const issuedBooks = [];

//     userWithIssuedBook.forEach((each) => {
//         const book = books.find((book) => (book.id === each.issuedBook));
//         book.issuedBy = each.name;
//         book.issuedDate = each.issuedDate;
//         book.returnDate = each.returnDate;
//         issuedBooks.push(book);
//     });
//     if (issuedBooks.length === 0) {
//         return res.status(404).json({
//             success: false,
//             message: "Book Not Issued !!!!!",
//         });
//     }
//     return res.status(200).json({
//         success: true,
//         message: "Book Found ✅",
//         data: issuedBooks,
//     });
// });




/**
  Route: /
  Method: POST
  Description: Adding a new book
  Access: Public
  Parameters: None
  Data: Price,id,Publisher,genere,name
  */
router.post("/", addNewBook);
// router.post("/", (req, res) => {
//     const { data } = req.body;
//     if (!data) {
//         return res.status(404).json({
//             success: false,
//             message: "No Data to add a Book!",
//         });
//     }

//     const book = books.find((each) => each.id === data.id);
//     if (book) {
//         return res.status(404).json({
//             succeed: false,
//             message: "ID Already Exist!!",
//         });
//     }
//     const allBooks = { ...books, data };
//     return res.status(201).json({
//         success: true,
//         message: "New Book Added ✅",
//         data: allBooks,
//     });
// });


/**
  Route: /
  Method: PUT
  Description: Update book by id
  Access: Public
  Parameters: ID
  Data: Price,id,Publisher,genere,name
  */
router.put("/:id", updateBooksById);

// router.put("/updateBook/:id", (req, res) => {
//     const { id } = req.params;
//     const { data } = req.body;

//     const book = books.find((each) => each.id === id);
//     if (!book) {
//         return res.status(400).json({
//             success: false,
//             message: "User not found ❌❌❌",
//         });
//     }
//     const updateBookData = books.map((each) => {
//         if (each.id === id) {
//             return {
//                 ...each,
//                 ...data,
//             };
//         }
//         return each;
//     });
//     return res.status(200).json({
//         success: true,
//         message: "Updated Book by their id Successfully✅",
//         data: updateBookData
//     });

// });



/**
  Route: /
  Method: PUT
  Description: GET subscription details
  Access: Public
  Parameters: ID
  Data: Price,id,Publisher,genere,name
  */

// ASSIGNMENT:




module.exports = router;