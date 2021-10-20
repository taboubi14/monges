const mongoose = require("mongoose");

// person schema
const personSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true,
    },
    age: {
        type: Number,
        require: true,
    },
    favoriteFoods: [String],
});

// Model
const Person = mongoose.model("Person", personSchema);

module.exports = Person;