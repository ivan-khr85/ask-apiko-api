const { Router: router } = require('express');
const { authenticate, withQuery, withFields } = require('../../middleware');
const update = require('./update');
const { getMy } = require('./my');


/**
 * Provide Api for User

 PUT /api/v1/users/my - Update User details
 @header
        Authorization: Bearer {token}
 @params
       email {string}
 GET /api/v1/users/my - Get own profile
 @header
        Authorization: Bearer {token}
 @optionalQueryParameters
       search {String} - value to search
       limit {Number} - count of item to send
       skip {Number} - value to search
       fields
           username - (1 || -1) skip or keep filed,
           email - (1 || -1) skip or keep filed,
           profile.fullName - (1 || -1) skip or keep filed,

 **/

module.exports = (models) => {
  const api = router();
  api.get('/my', authenticate, withQuery, withFields, getMy(models));
  api.put('/my', authenticate, update(models));

  return api;
};
