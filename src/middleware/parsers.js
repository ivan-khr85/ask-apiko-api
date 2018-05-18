const _ = require('lodash');
const DataObjectParser = require('dataobject-parser');


/**
 * @example
 *
 *        const query = { 'documents.value' : 1 };
 *        queryToObject(query) === { documents: { value: 1 } };
 * **/
const queryToObject = query => {
  const obj = {};
  _.keys(query).forEach(key => _.set(obj, key, query[key]));
  return obj;
};

const withQuery = (req, res, next) => {
  const query = queryToObject(req.query);
  _.extend(req, { query, _queryParsed: true });
  next();
};

const withFilter = (req, res, next) => {
  const query = req._queryParsed ? req.query : queryToObject(req.query);
  const filter = DataObjectParser.untranspose(query.filter);
  _.keys(filter || {}).forEach(key =>
    _.extend(filter, { [key]: parseInt(filter[key])
    }));
  _.extend(req, { filter });
  next();
};

module.exports = { withQuery, withFilter };