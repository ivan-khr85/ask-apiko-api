const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.Types.ObjectId;

const schema = new Schema({
  isPositive: {
    type: Boolean,
    required: [true],
  },
  answerId: {
    type: ObjectId,
    ref: 'Answer',
  },
  createdAt: {
    type: Date,
    required: [true],
  },
  createdBy: {
    type: ObjectId,
  }
});

module.exports = { schema };