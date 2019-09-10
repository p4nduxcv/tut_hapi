const array = require('./../src/array');
const mongoose = require("mongoose");
const Model_X = require('../models/model_x');
const Model_Y = require('../models/model_y');
const Model_Z = require('../models/model_z');

const o = [
    { P: 'p_test_x', Q: 'q_test_y' },
    { P: 'test3', Q: 'test4' }
];




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
        path: '/arraytest',
        handler: (request, h) => {
            for (let key of iterator) {
                console.log(key);
            }
            return Object.keys(o);
        }
    },
    {
        method: 'GET',
        path: '/method1',
        handler: async (request, h) => {
            try {
                let model_x = await Model_X.find().exec();
                return h.response(model_x);
            } catch (ex) {
                return h.response(ex.error).code(500);
            }
        }
    },
    {
        method: 'GET',
        path: '/insertX',
        handler: async (request, h) => {
            try {
                var model_x = new Model_X({
                    p: "p_test_x",
                    q: "q_test_x",
                    r: "r_test_x",
                })
                var model_x = await model_x.save();
                return h.response(model_x);
            } catch (ex) {
                return h.response(ex.error).code(500);
            }
        }
    },
    {
        method: 'GET',
        path: '/insertY',
        handler: async (request, h) => {
            try {
                var model_y = new Model_Y({
                    p: "p_test_y",
                    q: "q_test_y",
                    s: "s_test_y",
                })
                var model_y = await model_y.save();
                return h.response(model_y);
            } catch (ex) {
                return h.response(ex.error).code(500);
            }
        }
    },
    {
        method: 'GET',
        path: '/insertZ',
        handler: async (request, h) => {
            try {
                var model_z = new Model_Z({
                    p: "p_test_z",
                    q: "q_test_z",
                    t: "t_test_z",
                })
                var model_z = await model_z.save();
                return h.response(model_z);
            } catch (ex) {
                return h.response(ex.error).code(500);
            }
        }
    }
];