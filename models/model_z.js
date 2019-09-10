const mongoose = require("mongoose");
let ZtableSchema = new mongoose.Schema({
    p: String,
    q: String,
    t: String
});
ZtableSchema.indexes({ P: 1, Q: 1 }, { unique: true });

let ModelZ = mongoose.model("Ztable", ZtableSchema);

module.exports = ModelZ;