const routes = require('./../routes/router');
const Hapi = require('@hapi/hapi');
const mongoose = require("mongoose");


const server = Hapi.server({
    port: 9090,
});

server.route(routes);
server.start();
console.log('Server running on ', server.info.uri);

//connect to the mongo
mongoose
    .connect("mongodb://localhost/testdb", { useNewUrlParser: true })
    .then(() => console.log("Connection to db..."))
    .catch(err => console.error("Something went wrong", err));

let XtableSchema = new mongoose.Schema({
    P: String,
    Q: String,
    R: String
});

let YtableSchema = new mongoose.Schema({
    P: String,
    Q: String,
    S: String
});

let ZtableSchema = new mongoose.Schema({
    P: String,
    Q: String,
    T: String
});

let Xtable = mongoose.model("Xtable", XtableSchema);
let Ytable = mongoose.model("Ytable", YtableSchema);
let Ztable = mongoose.model("Ztable", ZtableSchema);

//create object using the model
async function createTable() {

    let xtable = new Xtable({
        P: "a",
        Q: "b",
        R: "c",
    });
    let ytable = new Ytable({
        P: "aa",
        Q: "bb",
        S: "cc",
    });
    let ztable = new Ztable({
        P: "aaa",
        Q: "bbb",
        T: "ccc",
    });

    let result1 = await xtable.save();
    let result2 = await ytable.save();
    let result3 = await ztable.save();
    //console.log(result1);
}

createTable();

async function getDataFromXtable() {
    let xtable = await Xtable.find({P: 'a'});
    console.log(xtable);
};

getDataFromXtable();
