const _ = require('lodash');
const { sendList } = require('../../middleware/index');
const { queryToObject } = require('../../utils/requests');

const getList = ({ Question }) => async (req, res, next) => {
  try {
    let { limit, skip, search, sort } = req.query;

    skip = skip ? parseInt(skip, 10) : 0;
    limit = parseInt(limit, 10);

    const query = {};
    const sortQuery = sort || { _id: -1 };
    if (search) {
      _.extend(query, { title: new RegExp(`${search}`, 'i') });
    }
    console.log(_.keys(req.filter).join(' '))
    const count = await Question.find(query).count();
    const questions = await Question.find(query, req.filter)
      .populate({
        path: 'createdById', select: _.keys(req.filter).join(' '),
      })
      .skip(skip)
      .limit(limit)
      .sort(sortQuery);

    return sendList(res, { questions, count });
  } catch (error) {
    next(error);
  }
};

module.exports = getList;
