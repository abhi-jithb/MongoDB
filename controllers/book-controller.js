const { UserModal, BookModal } = require("../modal/index");
const issuedBook = require("../dtos/book-dto");

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
    }).populate("issuedBook");

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
//DTO
// const issuedBooks = users.map((each) => new IssuedBook(each));

exports.addNewBook = async (req, res) => {
    const { data } = req.body;
    if (!data) {
        return res.status(404).json({
            success: true,
            message: "Book data not found ! ! !",
        });
    }
    await BookModal.create(data);
    const allBooks = await BookModal.find();

    return res.status(200).json({
        success: true,
        messsage: "BOOK added",
        data: allBooks,
    });
};

exports.updateBooksById = async (req, res) => {
    const { id } = req.params;
    const { data } = req.body;
    const updateBook = await BookModal.findByIdAndUpdate({
        _id: id,
    }, data, {
        new: true,   // to make database refreashed after updation
    }
    );

    return res.status(200).json({
        succed: true,
        message: "Updated Book",
        data: updateBook,
    });
};

// another approach of exporting
// const getAllBooks  = () => { };
// module.exports = { getAllBooks, getSingleBookById };