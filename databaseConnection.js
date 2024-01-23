const mongoose = require("mongoose");

function DbConnection() {
    const DB_URL = process.env.MONGO_URI;
    mongoose.connect(DB_URL, {
        useNewUrlparser: true,
        useUnifiedTopology: true,
    });
}

// connecting database
const db = mongoose.connection;
// oning db
db.on("error", console.error.bind(console, "Connection Error"));


// for cross checking connection
db.once("open", function () {
    console.log("Db_CONNECTED  !!")
});
module.exports = DbConnection;