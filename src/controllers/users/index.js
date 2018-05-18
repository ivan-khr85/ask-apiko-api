const { Router: router } = require('express');
const { authenticate } = require('../../middleware');
const update = require('./update');
const { getMy } = require('./my');


/**
 * Provide Api for User

 PUT /api/v1/users/my - Update User details
 @header
        Authorization: Bearer {token}
 @params
       email {string}

 **/

module.exports = (models) => {
  const api = router();
  api.get('/my', authenticate, getMy(models));
  api.put('/my', authenticate, update(models));

  return api;
};
