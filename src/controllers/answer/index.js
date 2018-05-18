const { Router: router } = require('express');
const { authenticate, withQuery, withFields } = require('../../middleware');
const update = require('./update');
const create = require('./create');
const remove = require('./remove');
const get = require('./get');
const list = require('./list');


/**
 * Provide Api for Answer

 GET /api/v1/answer/ - List
 @header
      Authorization: Bearer {token}
 @optionalQueryParameters
       search {String} - value to search
       limit {Number} - count of item to send
       skip {Number} - value to search


 GET /api/v1/answer/:_id - get single
 @header
        Authorization: Bearer {token}

 POST /api/v1/answer/ - Create
 @header
      Authorization: Bearer {token}
 @param
       title (require) - {string}
       description (require) - {string}
       tags (require) - [string]

 PATCH /api/v1/answer/:_id - Update
 @header
        Authorization: Bearer {token}
 @param
      title (require) - {string}
      description (require) - {string}
      tags (require) - [string]

 DELETE /api/v1/answer/:_id - Remove
 @header
        Authorization: Bearer {token}

 **/

module.exports = (models) => {
  const api = router();

  api.get('/',withQuery, withFields, list(models));
  api.get('/:_id',withQuery, withFields, get(models));
  api.post('/', authenticate, create(models));
  api.patch('/:_id', authenticate, update(models));
  api.delete('/:_id', authenticate, remove(models));

  return api;
};
