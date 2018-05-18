const { errorHandler } = require('./error-handler');
const { authenticate, generateAccessToken } = require('./auth');
const {
  sendOne,
  sendList,
  sendCreated,
  sendUpdated,
  sendDeleted,
  sendAccepted,
  withoutErrors,
} = require('./requests-helpers');
const {
  withQuery,
  withFields,
} = require('./parsers');

module.exports = {
  sendOne,
  sendList,
  sendCreated,
  sendUpdated,
  sendDeleted,
  sendAccepted,
  authenticate,
  generateAccessToken,
  withoutErrors,
  errorHandler,
  withQuery,
  withFields,
};