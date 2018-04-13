const mongoose = require('mongoose');
const { schema } = require('./schema');
const Answer = mongoose.model('Answer', schema);


module.exports = { Answer };