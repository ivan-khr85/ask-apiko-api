const _ = require('lodash');
const { sendUpdated } = require('../../middleware/index');

const update = ({ Question }) => async (req, res, next) => {
  try {
    const { _id } = req.params;
    const question = await Question.findOne({ _id });
    _.extend(question, req.body);

    await question.save();
    return sendUpdated(res, { question });

  } catch (error) {
    next(error);
  }
};

module.exports = update;
