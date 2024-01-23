const { UserModal, BookModal } = require("../modal/index");

exports.getAllBooks = async (req, res) => {
    const books = await BookModal.find();
    if (books.length === 0) {
        return res.status(404).json({
            success: true,
            message: "NO books found",
        });
    }
    res.status(200).json({
        success: true,
        message: "Books are listed below: ",
        data: books,
    });
};

exports.getSingleBookById = async (req, res) => {
    const { id } = req.params;
    const book = await BookModal.findById(id);

    if (!book) {
        return res.status(404).json({
            success: false,
            message: "Book not Found!!",
        });
    }
    return res.status(200).json({
        success: true,
        messsage: "Hurrary 🎉 Book Id Found",
        data: book,
    });
};

exports.getAllIssuedBooks = async (req, res) => {
    const users = await UserModal.find({
        issuedBook: { $exists: true }
    }).populate("issuedBook")
    if (issuedBooks.length === 0) {
        return res.status(404).json({
            success: false,
            message: "Book Not Issued !!!!!",
        });
    }
    return res.status(200).json({
        success: true,
        message: "User with issued Books Found ✅",
        data: issuedBooks,
    });
};

// another approach of exporting
// const getAllBooks  = () => { };
// module.exports = { getAllBooks, getSingleBookById };