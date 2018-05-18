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

const getFieldsForModel = (fieldsFilter, Model) => {
  const modelKeys = _.keys(Model.schema.paths);
  const fieldsFilterKeys = _.keys(fieldsFilter);
  const intersection = _.intersection(fieldsFilterKeys, modelKeys);
  return intersection.length ? intersection.join(' ') : '';
};

const withQuery = (req, res, next) => {
  const query = queryToObject(req.query);
  _.extend(req, { query, _queryParsed: true });
  next();
};

const withFields = (req, res, next) => {
  const query = req._queryParsed ? req.query : queryToObject(req.query);
  const fields = DataObjectParser.untranspose(query.fields);
  _.keys(fields || {}).forEach(key =>
    _.extend(fields, { [key]: parseInt(fields[key])
    }));
  _.extend(req, { fields, getFieldsForModel });
  next();
};

module.exports = { withQuery, withFields };