const mongoose = require("mongoose");

let YtableSchema = new mongoose.Schema({
    p: String,
    q: String,
    s: String
});
YtableSchema.indexes({ p: 1, q: 1 }, { unique: true });

let ModelY = mongoose.model("Ytable", YtableSchema);

module.exports = ModelY;


