// data base connection
const connectDB = require("./config/dataBase");

connectDB();

// handle and manage the database
const {
    creat_save,
    Create_Many_Save,
    Find_All_People,
    Find_One_Person,
    find_By_Id,
    Classic_Update,
    New_Update,
    Delete_One,
    Delete_Many,
    Chain_Search_Query,
} = require("./controllers/personController");

// ***************
// creat_save();

// ***************
// Create_Many_Save();

// ***************
// Find_All_People();

// ***************
// Find_One_Person();

// ***************
// find_By_Id();

// ***************
// Classic_Update();

// ***************
// New_Update();

// ***************
// Delete_One();

// ***************
// Delete_Many();

// ***************
Chain_Search_Query();