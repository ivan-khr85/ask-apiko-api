const _ = require('lodash');
const { sendCreated } = require('../../middleware/index');

const create = ({ Answer }) => async (req, res, next) => {
  try {
    const userId = req.user.id;
    const answer = new Answer(_.extend({
      createdBy: userId,
      createdAt: new Date(),
    }, req.body));

    await answer.save();
    return sendCreated(res, { answer });

  } catch (error) {
    next(error);
  }
};

module.exports = create;
