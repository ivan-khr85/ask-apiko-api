const { sendOne } = require('../../middleware/index');

const getMy = ({ User, Question }) => async (req, res, next) => {
  try {
    const user = await User.findById(req.user.id, req.fields);
    const questions = await Question.find({ createdById: req.user.id });

    return sendOne(res, { user, questions });

  } catch (error) {
    next(error);
  }
};

module.exports = { getMy };
