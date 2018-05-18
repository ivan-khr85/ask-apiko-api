const { sendOne } = require('../../middleware/index');

const getMy = ({ User }) => async (req, res, next) => {
  try {
    const user = await User.findById(req.user.id, req.fields);
    return sendOne(res, { user });

  } catch (error) {
    next(error);
  }
};

module.exports = { getMy };
