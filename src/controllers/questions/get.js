const { sendOne } = require('../../middleware/index');

const get = ({ Question }) => async (req, res, next) => {
  try {
    const { _id } = req.params;
    const question = await Question.findOne({ _id }, req.fields);
    return sendOne(res, { question });
  } catch (error) {
    next(error);
  }
};

module.exports = get;
