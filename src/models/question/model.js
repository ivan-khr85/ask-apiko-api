const _ = require('lodash');
const mongoose = require('mongoose');
const { schema } = require('./schema');

schema.set('toObject', {
  versionKey: false,
  transform: (doc, ret) => {
    if (_.get(ret, 'createdById._id')) {
      ret.createdBy = ret.createdById;
      ret.createdById = ret.createdBy._id;
    }
  },
});

const Question = mongoose.model('Question', schema);
module.exports = { Question };