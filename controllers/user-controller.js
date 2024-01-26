const { UserModal, BookModal } = require("../modal/index");

exports.getAllUsers = async (req, res) => {
    const users = await UserModal.find();
    if (users === 0) {
        return res.status(404).json({
            success: false,
            message: "No users Found",
        })
    }
    return res.status(200).json({
        success: true,
        message: "Got all users",
        data: users,
    });
};

exports.getSingleUser = async (req, res) => {
    const { id } = req.params;
    const user = await UserModal.findById(id);

    if (!user) {
        return res.status(404).json({
            success: false,
            message: "User not Found!!",
        });
    }
    return res.status(200).json({
        success: true,
        messsage: "Hurrary 🎉 Book Id Found",
        data: user,
    });
};
exports.addNewUser = async (req, res) => {
    const { data } = req.body;
    if (!data) {
        return res.status(404).json({
            success: true,
            message: "User data not found ! ! !",
        });
    }
    await UserModal.create(data);
    const allUsers = await UserModal.find();

    return res.status(200).json({
        success: true,
        messsage: "User added",
        data: allUsers,
    });
};
exports.updateUserData = async (req, res) => {
    const { id } = req.params;
    const { data } = req.body;
    const updateUser = await UserModal.findByIdAndUpdate({
        _id: id,
    }, data, {
        new: true,
    }
    );
    return res.status(200).json({
        succed: true,
        message: "Updated User information",
        data: updateUser,
    });
};
