API routes
GET - http://localhost:8080/api/products/
response a list of all products
response:
```JSON
[
    {
        "_id": "6305a58d8cfe8a97ee6c37c7",
        "name": "Keyboard",
        "price": 10.76,
        "quantity": "34",
        "updatedBy": [
            "raufig",
            "raufig"
        ],
        "createdAt": "2023-03-23T19:55:26.655Z"
    },
    {
        "updatedBy": [],
        "_id": "6305a58d8cfe8a97ee6c37c8",
        "name": "Mouse",
        "price": 9.87,
        "quantity": "5",
        "createdAt": "2023-03-23T19:55:26.655Z"
    }
]
```
POST - http://localhost:8080/api/users/create
Allows the creation of new users

error message 'user information is necessary' if name, lastName and email are not sent to the API

body request:
```JSON
{
    "name":"raufig", "lastName":"raufig", "email":"raufig@mail.com"
}
```
response:
```JSON
{
    "name": "raufig",
    "lastName": "raufig",
    "email": "raufig@mail.com",
    "_id": "641c9c398ea0b540d6395dba",
    "createdAt": "2023-03-23T18:36:41.876Z",
    "__v": 0
}
```

PUT - http://localhost:8080/api/users/update
Receives information from the user who update the products and responds with the information of the updated product
(I add an array with the information of the userName and the date of the update to have a log of updates)

error message:
'all user information are necessary' if the username or id is not sent
'product id to update are necessary' if the product id is not sent
'user not registered in DB' : 'product not registered in DB' if the user or product is not registered in the DB
body request:
```JSON
{
    "userInfo": {
        "name": "raufig",
        "updatedById": "641c9c398ea0b540d6395dba"
    },
    "productInfo":{
        "_id":"6305a58d8cfe8a97ee6c37c7"
    }
}
```

response:
```JSON
{
    "_id": "6305a58d8cfe8a97ee6c37c7",
    "name": "Keyboard",
    "price": 10.76,
    "quantity": "34",
    "updatedBy": [
        {
            "userName": "raufig",
            "_id": "641cb0608b9fd2b2678080db",
            "updatedAt": "2023-03-23T20:02:40.708Z"
        }
    ],
    "createdAt": "2023-03-23T20:02:40.711Z"
}
```