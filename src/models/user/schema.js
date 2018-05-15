const mongoose = require('mongoose');
const { EMAIL } = require('../../utils/regexes');
const Schema = mongoose.Schema;

const schema = new Schema({
  username: {
    type: String,
    required: [true],
  },
  email: {
    type: String,
    required: [true],
    validate: {
      validator: email => EMAIL.test(email),
      message: 'Field [email] wrong format.',
    },
  },
  profile: {
    fullName: {
      type: String,
    },
  },
});

module.exports = { schema };