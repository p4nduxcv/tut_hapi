const array = require('./../src/array');

module.exports = [
    {
        method: 'GET',
        path: '/home',
        handler: (request, h) => {
            return ('Hello World! from Home');
        }
    },
    {
        method: 'GET',
        path: '/o',
        handler: (request, h) => {
            return (o);
        }
    },
    {
        method: 'GET',
        path: '/',
        handler: function (request, h) {
            return h.array.o;
        }
    }
];