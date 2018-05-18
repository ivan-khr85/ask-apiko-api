const _ = require('lodash');
const { sendList } = require('../../middleware/index');

const getListOfAnswers = ({ Answer }) => async (req, res, next) => {
  try {
    let { _id } = req.params;
    let { limit, skip, search } = req.query;

    skip = skip ? parseInt(skip, 10) : 0;
    limit = parseInt(limit, 10);

    const query = { questionId: _id };
    if (search) {
      _.extend(query, { title: new RegExp(`${search}`, 'i') });
    }
    const count = await Answer.find(query).count();
    const questions = await Answer.find(query, req.fields)
      .skip(skip)
      .limit(limit);

    return sendList(res, { questions, count });
  } catch (error) {
    next(error);
  }
};

module.exports = getListOfAnswers;
