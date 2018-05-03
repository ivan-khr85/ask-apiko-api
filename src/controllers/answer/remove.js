const { sendDeleted } = require('../../middleware/index');

const remove = ({ Answer }) => async (req, res, next) => {
  try {
    const { _id } = req.params;
    const answer = await Answer.findOne({ _id });
    await Answer.remove({ _id });
    return sendDeleted(res, { answer });
  } catch (error) {
    next(error);
  }
};

module.exports = remove;
