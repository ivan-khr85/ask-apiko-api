const { sendOne } = require('../../middleware/index');

const get = ({ Answer }) => async (req, res, next) => {
  try {
    const { _id } = req.params;
    const answer = await Answer.findOne({ _id }, req.fields);
    return sendOne(res, { answer });
  } catch (error) {
    next(error);
  }
};

module.exports = get;
