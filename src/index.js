const routes = require('./../routes/router');
const Hapi = require('@hapi/hapi');


const server = Hapi.server({
    port: 9090,
});
server.route(routes);
server.start();
console.log('Server running on ', server.info.uri);