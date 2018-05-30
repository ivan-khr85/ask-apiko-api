const _ = require('lodash');
const { sendCreated } = require('../../middleware/index');

const create = ({ Question }) => async (req, res, next) => {
  try {
    const userId = req.user.id;
    const question = new Question(_.extend({
      createdById: userId,
      createdAt: new Date(),
    }, req.body, {
      tags: req.body.tags.trim() !== '' ? (req.body.tags).split(' ') : []
      // tags: ['JS', "REACT"]

    }));
    console.log(question)

    await question.save();
    return sendCreated(res, { question });

  } catch (error) {
    next(error);
  }
};

module.exports = create;
