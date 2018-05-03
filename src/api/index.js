const express = require('express');

const { errorHandler } = require('../middleware/index');
const { User } = require('../models/user');
const { Question } = require('../models/question');
const { Answer } = require('../models/answers');
const { Vote } = require('../models/vote');

const auth = require('../controllers/auth');
const users = require('../controllers/users');
const questions = require('../controllers/questions');

const models = { User, Question, Answer, Vote };

const routersInit = config => {
  const router = express();

  router.use('/auth', auth(models, { config }));
  router.use('/users', users(models, { config }));
  router.use('/questions', questions(models, { config }));

  router.use(errorHandler);
  return router;
};

module.exports = routersInit;
