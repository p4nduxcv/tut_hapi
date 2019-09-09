const array = require('./../src/array');
const Model_X = require('../models/model_x');
const Model_Y = require('../models/model_y');
const Model_Z = require('../models/model_z');

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
        path: '/insertX',
        handler: async (request, h) => {
            try {
                var model_x = new Model_X({
                    p: "pandulaz",
                    q: "dana",
                    r: "mandawala",
                })
                var model_x = await model_x.save();
                return h.response(model_x);
            } catch (error) {
                return h.response(error).code(500);
            }
        }
    },
    {
        method: 'GET',
        path: '/insertY',
        handler: async (request, h) => {
            try {
                var model_y = new Model_Y({
                    p: "add",
                    q: "bdd",
                    s: "cdsd",
                })
                var model_y = await model_y.save();
                return h.response(model_y);
            } catch (error) {
                return h.response(error).code(500);
            }
        }
    },
    {
        method: 'GET',
        path: '/insertZ',
        handler: async (request, h) => {
            try {
                var model_z = new Model_Z({
                    p: "M",
                    q: "MC",
                    r: "MCK",
                })
                var model_z = await model_z.save();
                return h.response(model_z);
            } catch (error) {
                return h.response(error).code(500);
            }
        }
    }
];