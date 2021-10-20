const Person = require("../models/personSchema");

const creat_save = async () => {
    //Create a Model of person
    const person = new Person({
        name: "oussema ghaoui",
        age: 19,
        favoriteFoods: ["Margarine", "Pizza"],
    });

    //Save a Record in Data Base
    try {
        await person.save(() => {
            console.log("Person Added succesfully !!!");
        });
    } catch (err) {
        console.log(err);
    }
};

// ***********************************************
//Create and save Many Records with model.create()

const Create_Many_Save = async () => {
    const ManyPeople = [
        {
            name: "person1",
            age: 2020,
            favoriteFoods: ["Steak", "Seafood", "burritos"],
        },
        {
            name: "person2",
            age: 60,
            favoriteFoods: ["Bread", "Steak"],
        },
        {
            name: "person3",
            age: 14,
            favoriteFoods: ["Fish", "Pizza", "burritos"],
        },
        {
            name: "person4",
            age: 19,
            favoriteFoods: ["Pizza", "Steak"],
        },
        { name: "Mary", age: 20, favoriteFoods: ["Pizza", "Steak"] },
        { name: "Mary", age: 30, favoriteFoods: ["Fish", "Steak"] },
        { name: "Mary", age: 10, favoriteFoods: ["Pizza", "Bread"] },
    ];
    try {
        Person.create(ManyPeople, () => {
            console.log("Many Person added succesfully !!!");
        });
    } catch (err) {
        console.log(err);
    }
};

// ***********************************************
// Use model.find() to Search Your Database

const Find_All_People = async () => {
    try {
        await Person.find({}, (err, data) => {
            console.log("find all people\n", data);
        });
    } catch (err) {
        console.log(err);
    }
};

// ***********************************************
// Use model.findOne() to Return a Single Matching Document from Your Database

const Find_One_Person = async () => {
    try {
        await Person.findOne({ favoriteFoods: "Bread" }, (err, data) => {
            if (err) throw err;
            console.log("find one person\n", data);
        });
    } catch (err) {
        console.log(err);
    }
};

// ***********************************************
// Use model.findById() to Search Your Database By _id

const find_By_Id = async () => {
    try {
        await Person.findById("610019d17795d217785f3d6b", (err, data) => {
            console.log("find a person by Id\n", data);
        });
    } catch (err) {
        console.log(err);
    }
};

// ***********************************************
// Perform Classic Updates by Running Find, Edit, then Save

const Classic_Update = async () => {
    try {
        Person.findByIdAndUpdate(
            "610019d17795d217785f3d6b",
            { $push: { favoriteFoods: "hamburger" } },
            (err, data) => {
                console.log(data);
            }
        );
    } catch (err) {
        console.log(err);
    }
};

// ***********************************************
// Perform New Updates on a Document Using model.findOneAndUpdate()

const New_Update = async () => {
    try {
        await Person.findOneAndUpdate(
            { name: "person1" },
            { age: 40 },
            (err, data) => {
                console.log(data);
            }
        );
    } catch (err) {
        console.log(err);
    }
};

// ***********************************************
// Delete One Document Using model.findByIdAndRemove

const Delete_One = async () => {
    try {
        await Person.findByIdAndRemove(
            "610019d17795d217785f3d6d",
            (err, data) => {
                console.log(data);
            }
        );
    } catch (err) {
        console.log(err);
    }
};

// ***********************************************
// MongoDB and Mongoose - Delete Many Documents with model.remove()

const Delete_Many = async () => {
    try {
        await Person.deleteMany({ name: "Mary" }, (err, data) => {
            console.log(data);
        });
    } catch (err) {
        console.log(err);
    }
};

// ***********************************************
// Chain Search Query Helpers to Narrow Search Results

const Chain_Search_Query = async () => {
    Person.find({ favoriteFoods: "burritos" }) // find Person
        .limit(2) // limit to Two
        .sort({ name: 1 }) // sort ascending by name
        .select({ age: false }) // Make age hidden
        .exec((err, data) => {
            if (err) {
                console.log(err);
            } else console.log(data);
        });
};

// ***********************************************
module.exports = {
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
};
// ***********************************************