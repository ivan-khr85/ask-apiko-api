const { sendDeleted } = require('../../middleware/index');

const remove = ({ Question }) => async (req, res, next) => {
  try {
    const { _id } = req.params;
    const question = await Question.findOne({ _id });
    await Question.remove({ _id });
    return sendDeleted(res, { question });
  } catch (error) {
    next(error);
  }
};

module.exports = remove;
