const mongoose = require('mongoose');
const { schema } = require('./schema');
const Vote = mongoose.model('Vote', schema);


module.exports = { Vote };