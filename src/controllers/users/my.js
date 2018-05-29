const { sendOne } = require('../../middleware/index');

const getMy = ({ User, Question }) => async (req, res, next) => {
  try {
    const user = await User.findById(req.user.id, req.fields);
    console.log(req.user.id)
    const questions = await Question.find({ createdById: req.user.id });
    console.log(questions)

    return sendOne(res, { user, questions });

  } catch (error) {
    next(error);
  }
};

module.exports = { getMy };
