const _ = require('lodash');
const { sendList } = require('../../middleware/index');

const getList = ({ Question }) => async (req, res, next) => {
  try {
    let { limit, skip, search } = req.query;

    skip = skip ? parseInt(skip, 10) : 0;
    limit = parseInt(limit, 10);

    const query = {};
    if (search) {
      _.extend(query, { title: new RegExp(`${search}`, 'i') });
    }
    const count = await Question.find(query).count();
    const activities = await Question.find(query)
      .skip(skip)
      .limit(limit);

    return sendList(res, { activities, count });
  } catch (error) {
    next(error);
  }
};

module.exports = getList;
