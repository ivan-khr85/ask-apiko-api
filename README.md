#  Ask Apiko API

at -> http://ask-apiko-api.herokuapp.com/


## Start

Make sure that you have last version of [Node js](https://nodejs.org/en//) and [npm](https://www.npmjs.com/). Thеn run

> !!! add .env file with `PORT` `MONGODB_URI` and `SECRET_TOKEN` variables for example 
 ```
MONGODB_URI = mongodb://localhost:27017/ask-apiko-api
PORT = 3001
SECRET_TOKEN = W3 Hav3 th3 kn0w h0w

 ```
 and then:
```
npm i && npm run dev

```

### Lint

```
npm run lint
```

## API docs
### Auth

__POST__ `/api/v1/auth/sign-in` - **Sign In**
```
@params
       username {string}
       password {string}
 ```

 __POST__ `/api/v1/auth/sign-up` - **Sign Un**
```
 @params
       username
       email {string}
       password {string}
       profile. 
               fullname  {string}
```
 __POST__ /api/v1/auth/sign-out - **Sign Out**
```
 @header
        Authorization: Bearer {token}
```

__PUT__ `/api/v1/auth/change-password` - **Change Password**
```
 @header
       Authorization: Bearer {token}
 @params
       newPassword {string}
       password {string}
```



### User

__PUT__ `/api/v1/users/my` - **Update** User details
```
 @header
        Authorization: Bearer {token}
 @params
       email {string}
```

 GET `/api/v1/users/my` - Get own Profile

 ```
 @header
      Authorization: Bearer {token}
 @optionalQueryParameters
       search {String} - value to search
       limit {Number} - count of item to send
       skip {Number} - value to search
       sort. 
            [fieldName] {Number} 1 || -1
       fields
             [fieldName] - (1 || -1) skip or keep filed,
           
```


### Question

 GET `/api/v1/questions/` - List

 ```
 @header
      Authorization: Bearer {token}
 @optionalQueryParameters
       search {String} - value to search
       limit {Number} - count of item to send
       skip {Number} - value to search
       sort. 
            [fieldName] {Number} 1 || -1
       fields
             [fieldName] - (1 || -1) skip or keep filed,
           
```

 GET `/api/v1/questions/:_id` - get single

 ```
 @header
        Authorization: Bearer {token}

 ```
 
  GET `/api/v1/questions/:_id/answers` - List of answers
 
  ```
  @header
       Authorization: Bearer {token}
  @optionalQueryParameters
        search {String} - value to search
        limit {Number} - count of item to send
        skip {Number} - value to search
 ```

 POST `/api/v1/questions/` - Create

 ```
 @header
      Authorization: Bearer {token}
 @param
       title (require) - {string}
       description (require) - {string}
       tags (require) - [string]
  ```

 PATCH `/api/v1/questions/:_id` - Update

 ```
 @header
        Authorization: Bearer {token}
 @param
      title (require) - {string}
      description (require) - {string}
      tags (require) - [string]
 ```

 DELETE `/api/v1/questions/:_id` - Remove

 ```
 @header
        Authorization: Bearer {token}
 ```
 
 ### Answer
 
  GET `/api/v1/answers/` - List
 
  ```
  @header
       Authorization: Bearer {token}
  @optionalQueryParameters
        search {String} - value to search
        limit {Number} - count of item to send
        skip {Number} - value to search
 ```
 
  GET `/api/v1/answers/:_id` - get single
 
  ```
  @header
         Authorization: Bearer {token}
 
  ```
 
  POST `/api/v1/answers/` - Create
 
  ```
  @header
       Authorization: Bearer {token}
  @param
        title (require) - {string}
        description (require) - {string}
        questionId - {string}
   ```
 
  PATCH `/api/v1/answers/:_id` - Update
 
  ```
  @header
         Authorization: Bearer {token}
  @param
       title (require) - {string}
       description (require) - {string}
  ```
 
  DELETE `/api/v1/answers/:_id` - Remove
 
  ```
  @header
         Authorization: Bearer {token}
  ```
