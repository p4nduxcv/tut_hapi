const mongoose = require("mongoose");

let XtableSchema = new mongoose.Schema({
    p: String,
    q: String,
    r: String
});

XtableSchema.indexes({ P: 1, Q: 1 }, { unique: true });

let ModelX = mongoose.model("Xtable", XtableSchema);

module.exports = ModelX;