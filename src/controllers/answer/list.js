const _ = require('lodash');
const { sendList } = require('../../middleware/index');

const getList = ({ Answer }) => async (req, res, next) => {
  try {
    let { limit, skip, search } = req.query;

    skip = skip ? parseInt(skip, 10) : 0;
    limit = parseInt(limit, 10);

    const query = {};
    if (search) {
      _.extend(query, { title: new RegExp(`${search}`, 'i') });
    }
    const count = await Answer.find(query).count();
    const answers = await Answer.find(query, req.fields)
      .skip(skip)
      .limit(limit);

    return sendList(res, { answers, count });
  } catch (error) {
    next(error);
  }
};

module.exports = getList;
