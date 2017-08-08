
var mongoose = require('mongoose');

mongoose.Promise = global.Promise;

mongoose.connect('mongodb://localhost:27018/test-restify');

module.exports = {mongoose};
