const controllers = {};

controllers.validate = require('./validate');
controllers.events = require('./events');
controllers.users = require('./users');
controllers.token = require('./token');

module.exports = controllers;
