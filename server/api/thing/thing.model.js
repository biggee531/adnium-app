'use strict';

var mongoose = require('bluebird').promisifyAll(require('mongoose'));

var ThingSchema = new mongoose.Schema({
  id: Number,
  name: String,
  status: String,
  cpmv: Number,
  hp_low:Number,
  hp: Number,
  hp_high: Number,
    recommend: Number,
    cpmv_max: Number
});

export default mongoose.model('Thing', ThingSchema);
