const mongoose = require("mongoose");

let XtableSchema = new mongoose.Schema({
    p: String,
    q: String,
    r: String
});

XtableSchema.indexes({ p: 1, q: 1 }, { unique: true });

let ModelX = mongoose.model("Xtable", XtableSchema);

module.exports = ModelX;