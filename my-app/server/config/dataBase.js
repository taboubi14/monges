// mongoose
const mongoose = require("mongoose");

// data base connection
const connectDB = async () => {
    try {
        await mongoose.connect("mongodb://127.0.0.1:27017/peopleDB", {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true,
        });
        console.log("DATA BASE CONNECTION SUCCESS !!!!");
    } catch (err) {
        console.error("DATA BASE CONNECTION FAIL !!!!", err);
        process.exit(1);
    }
};

//  EXPORT MODULES
module.exports = connectDB;