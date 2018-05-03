const _ = require('lodash');
const { sendUpdated } = require('../../middleware/index');

const update = ({ Answer }) => async (req, res, next) => {
  try {
    const { _id } = req.params;
    const answer = await Answer.findOne({ _id });
    _.extend(answer, req.body);

    await answer.save();
    return sendUpdated(res, { answer });
  } catch (error) {
    next(error);
  }
};

module.exports = update;
