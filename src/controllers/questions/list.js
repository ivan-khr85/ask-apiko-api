const _ = require('lodash');
const { sendList } = require('../../middleware/index');
const { queryToObject } = require('../../utils/requests');

const getList = ({ Question }) => async (req, res, next) => {
  try {
    let { limit, skip, search, sort } = queryToObject(req.query);

    skip = skip ? parseInt(skip, 10) : 0;
    limit = parseInt(limit, 10);

    const query = {};
    console.log(sort)
    const sortQuery = sort || { _id: -1 };
    if (search) {
      _.extend(query, { title: new RegExp(`${search}`, 'i') });
    }
    const count = await Question.find(query).count();
    const questions = await Question.find(query)
      .skip(skip)
      .limit(limit)
      .sort(sortQuery);

    return sendList(res, { questions, count });
  } catch (error) {
    next(error);
  }
};

module.exports = getList;
