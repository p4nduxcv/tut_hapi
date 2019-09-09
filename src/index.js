const routes = require('./../routes/router');
const Hapi = require('@hapi/hapi');
const mongoose = require("mongoose");

//connect to the mongo
mongoose
    .connect("mongodb://localhost/testdb", { useNewUrlParser: true })
    .then(() => console.log("Connection to testdb..."))
    .catch(err => console.error("Something went wrong", err));


const server = Hapi.server({
    port: 9090,
});
server.route(routes);
server.start();
console.log('Server running on ', server.info.uri);