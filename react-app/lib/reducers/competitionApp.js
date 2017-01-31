"use strict";

var combineReducers = require('redux').combineReducers;
var competition = require('./competition').reducer;
var tab = require('./tab').reducer;

const reducer = combineReducers({
  competition,
  tab
});

module.exports.reducer = reducer;