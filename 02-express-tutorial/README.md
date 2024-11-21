Please find below instructions on how to run and how to test the Express tutorial project **Lesson 3**.

### **How To Start:**

Open a terminal and move to `02-express-tutorial` and run the following commands:

```% npm install```

```% npm run dev1```

[nodemon] starting `node app.js` prompting that the server is running on http://localhost:3000

### **How To Test:**

Open a browser and navigate to http://localhost:3000

You should see the home page from the `public` directory

Try navigating to http://localhost:3000/not-there (Returns a 404 response)
You should see the 404 response

Try navigating to http://localhost:3000/api/v1/test (Returns a message indicating that the test worked.)

You should see the JSON response with the message:
```
// http://localhost:3000/api/v1/test
 {
   "message": "It worked!"
 }
 ```

 Try to navigate to http://localhost:3000/api/v1/products (Returns all products.)

 You should see the JSON response with the products data:
```
// http://localhost:3000/api/v1/products

 [
   {
     "id": 1,
     "name": "albany sofa",
     "image": "./image_1.png",
     "price": 39.95,
     "desc": "I'm baby direct trade farm-to-table hell of, YOLO readymade raw denim venmo whatever organic gluten-free kitsch schlitz irony af flexitarian."
   },
   {
     "id": 2,
     "name": "entertainment center",
     "image": "./image_2.png",
     "price": 29.98,
     "desc": "I'm baby direct trade farm-to-table hell of, YOLO readymade raw denim venmo whatever organic gluten-free kitsch schlitz irony af flexitarian."
   },
   {
     "id": 3,
     "name": "albany sectional",
     "image": "./image_3.png",
     "price": 10.99,
     "desc": "I'm baby direct trade farm-to-table hell of, YOLO readymade raw denim venmo whatever organic gluten-free kitsch schlitz irony af flexitarian."
   },
   {
     "id": 4,
     "name": "leather sofa",
     "image": "./image_4.png",
     "price": 9.99,
     "desc": "I'm baby direct trade farm-to-table hell of, YOLO readymade raw denim venmo whatever organic gluten-free kitsch schlitz irony af flexitarian."
   }
 ]
 ```

Try to navigate to http://localhost:3000/api/v1/products/2 (Returns the product with ID 2.)

You should see the JSON response with the product data:
```
// http://localhost:3000/api/v1/products/2

 {
     "id": 2,
     "name": "entertainment center",
     "image": "./image_2.png",
     "price": 29.98,
     "desc": "I'm baby direct trade farm-to-table hell of, YOLO readymade raw denim venmo whatever organic gluten-free kitsch schlitz irony af flexitarian."
   },
   ```

Try to navigate to http://localhost:3000/api/v1/products/5 (Returns a message indicating that the product was not found.)

You should see the JSON response with the message:
```
// http://localhost:3000/api/v1/products/5

{
   "message": "That product was not found."
 }
 ```
and status `404` in the browser dev tools Network tab

Try to navigate to http://localhost:3000/api/v1/query?regexSearch=sofa (Returns only products with a name that contains 'sofa'.)

You should see the JSON response with the product data:
```
// http://localhost:3000/api/v1/query?regexSearch=sofa

 [
  {
     "id": 1,
     "name": "albany sofa",
     "image": "./image_1.png",
     "price": 39.95,
     "desc": "I'm baby direct trade farm-to-table hell of, YOLO readymade raw denim venmo whatever organic gluten-free kitsch schlitz irony af flexitarian."
   },
   {
     "id": 4,
     "name": "leather sofa",
     "image": "./image_4.png",
     "price": 9.99,
     "desc": "I'm baby direct trade farm-to-table hell of, YOLO readymade raw denim venmo whatever organic gluten-free kitsch schlitz irony af flexitarian."
   }
]
```

Try to navigate to http://localhost:3000/api/v1/query?maxPrice=20 (Returns only products with a price less than or equal to 20.)

You should see the JSON response with the product data:
```
// http://localhost:3000/api/v1/query?maxPrice=20

 [
   {
     "id": 3,
     "name": "albany sectional",
     "image": "./image_3.png",
     "price": 10.99,
     "desc": "I'm baby direct trade farm-to-table hell of, YOLO readymade raw denim venmo whatever organic gluten-free kitsch schlitz irony af flexitarian."
   },
   {
     "id": 4,
     "name": "leather sofa",
     "image": "./image_4.png",
     "price": 9.99,
     "desc": "I'm baby direct trade farm-to-table hell of, YOLO readymade raw denim venmo whatever organic gluten-free kitsch schlitz irony af flexitarian."
   }
 ]
 ```

Try to navigate to http://localhost:3000/api/v1/query?sort=asc (Sorts the products by price in ascending order among the product's prices in our case.)

You should see the JSON response with the product data:
```
// http://localhost:3000/api/v1/query?sort=asc

 [
   {
     "id": 4,
     "name": "leather sofa",
     "image": "./image_4.png",
     "price": 9.99,
     "desc": "I'm baby direct trade farm-to-table hell of, YOLO readymade raw denim venmo whatever organic gluten-free kitsch schlitz irony af flexitarian."
   },
   {
     "id": 3,
     "name": "albany sectional",
     "image": "./image_3.png",
     "price": 10.99,
     "desc": "I'm baby direct trade farm-to-table hell of, YOLO readymade raw denim venmo whatever organic gluten-free kitsch schlitz irony af flexitarian."
   },
   {
     "id": 2,
     "name": "entertainment center",
     "image": "./image_2.png",
     "price": 29.98,
     "desc": "I'm baby direct trade farm-to-table hell of, YOLO readymade raw denim venmo whatever organic gluten-free kitsch schlitz irony af flexitarian."
   },
   {
     "id": 1,
     "name": "albany sofa",
     "image": "./image_1.png",
     "price": 39.95,
     "desc": "I'm baby direct trade farm-to-table hell of, YOLO readymade raw denim venmo whatever organic gluten-free kitsch schlitz irony af flexitarian."
   }
 ]
```

Try to navigate to http://localhost:3000/api/v1/query?limit=2 (Returns only the first 2 products in the list.)

You should see the JSON response with the product data:
```
// http://localhost:3000/api/v1/query?limit=2

 [
   {
     "id": 1,
     "name": "albany sofa",
     "image": "./image_1.png",
     "price": 39.95,
     "desc": "I'm baby direct trade farm-to-table hell of, YOLO readymade raw denim venmo whatever organic gluten-free kitsch schlitz irony af flexitarian."
   },
   {
     "id": 2,
     "name": "entertainment center",
     "image": "./image_2.png",
     "price": 29.98,
     "desc": "I'm baby direct trade farm-to-table hell of, YOLO readymade raw denim venmo whatever organic gluten-free kitsch schlitz irony af flexitarian."
   }
 ]
```

Try to navigate to http://localhost:3000/api/v1/query?search=albany&limit=1 (Returns only the first product in the list that starts with 'albany'.)

 You should see the JSON response with the product data:
```
// http://localhost:3000/api/v1/query?search=albany&limit=1

 [
   {
     "id": 1,
     "name": "albany sofa",
     "image": "./image_1.png",
     "price": 39.95,
     "desc": "I'm baby direct trade farm-to-table hell of, YOLO readymade raw denim venmo whatever organic gluten-free kitsch schlitz irony af flexitarian."
   }
 ]
```

Try to navigate to http://localhost:3000/api/v1/query?search=albany&limit=1&maxPrice=20
(Returns only the first product in the list that starts with 'albany' and has a price less than or equal to 20.)

You should see the JSON response with the product data:
```
// http://localhost:3000/api/v1/query?search=albany&limit=1&maxPrice=20

 [
   {
     "id": 3,
     "name": "albany sectional",
     "image": "./image_3.png",
     "price": 10.99,
     "desc": "I'm baby direct trade farm-to-table hell of, YOLO readymade raw denim venmo whatever organic gluten-free kitsch schlitz irony af flexitarian."
   }
 ]
```

Navigate to http://localhost:3000
Click `Fetch Products` button in the browser.

You should see the list of products displayed in the browser, including the product name, image, price, and description

To stop the server, press `Ctrl+C` in the terminal.


## Please find below instructions on how to run and how to test the Express tutorial project **Lesson 4**.

### **How To Start Testing Part "Logger" of the Assignment:**


Open a terminal and move to `02-express-tutorial` and run the following commands:

```% npm install```

```% npm run dev1```

[nodemon] starting `node app_lesson_4_logger.js` prompting `Express Tutorial Lesson 4 logger` and info that the server is running on http://localhost:3000

Navigate to http://localhost:3000 (Use innerLogger and outer logger middleware for the root path)

You should see in the browser: `Hello, World! This is the home page.`

You should see in the nodemon terminal: 
```
outerLogger function. Time: [2024-11-20T00:03:17.679Z] method: GET request to "/" route
innerLogger function: Year: [2024] method: GET request to "/" route
```

Navigate to http://localhost:3000/about (Use innerLogger and outer logger middleware for the `/about` path)

You should see in the browser: `This is the about page.`

You should see in the nodemon terminal:
```
innerLoggerAboutContact function. Year: [2024] method: GET request to "/about" route
outerLogger function. Time: [2024-11-20T00:07:35.908Z] method: GET request to "/about" route
```

Navigate to http://localhost:3000/contact (Use innerLogger and outer logger middleware for the `/contact` path)

You should see in the browser: `This is the contact page.`

You should see in the nodemon terminal:
```
innerLoggerAboutContact function. Year: [2024] method: GET request to "/contact" route
outerLogger function. Time: [2024-11-20T00:12:09.259Z] method: GET request to "/contact" route
```

Navigate to http://localhost:3000/offers (Use outer logger middleware for the `/offers` path)

You should see in the browser: `This is the offers page.`

You should see in the nodemon terminal:
```
outerLogger function. Time: [2024-11-20T00:15:09.259Z] method: GET request to "/offers" route
```
#### **IMPORTANT! Stop the server, press `Ctrl+C` in the terminal.**

### **How To Start Testing Part "Methods" of the Assignment:**

Open a terminal and move to `02-express-tutorial` and run the following commands:

```% npm install```
```% npm run dev2```

[nodemon] starting `node app_lesson_4_methods.js` prompting `Express Tutorial Lesson 4 methods` and info that the server is running on http://localhost:3000

Navigate to http://localhost:3000/api/v1/people (GET request to the `/api/v1/people` route  - all people)

You should see in the browser: 
```
// http://localhost:3000/api/v1/people

{
  "success": true,
  "data": [
    {
      "id": 1,
      "name": "john"
    },
    {
      "id": 2,
      "name": "peter"
    },
    {
      "id": 3,
      "name": "susan"
    },
    {
      "id": 4,
      "name": "anna"
    },
    {
      "id": 5,
      "name": "emma"
    }
  ]
}
```


Navigate to http://localhost:3000/api/v1/people/2 (GET request to the `/api/v1/people/2` route - one person with ID 2)

You should see in the browser: 
```
// http://localhost:3000/api/v1/people/2

{
  "success": true,
  "data": {
    "id": 2,
    "name": "peter"
  }
}
```
You should see nothing new in the nodemon terminal.


Navigate to http://localhost:3000/api/v1/people/12 (GET request to the `/api/v1/people/12` route - one person with ID 12 (not found)).

You should see in the browser: 
```
// http://localhost:3000/api/v1/people/12

{
  "success": false,
  "msg": "No person with id 12"
}
```

You should see nothing new in the nodemon terminal and status `404 Not Found` in the browser dev tools Network tab

#### **Testing the POST request via the HTML form:**

Navigate to http://localhost:3000/index.html (HTML form with a POST request to the `/api/v1/people` route)

You should see a simple form in the browser:

Fill in the form with the name `bob` and submit the form. You should be re-directed to the `http://localhost:3000/login` route and see `Wellcom bob` on the corespondent page.

You should see nothing new in the nodemon terminal. 

Back to the previous page and refresh to see the form again. Do not enter any name and submit the form. You should see the error message `Please provide a name` in the browser and status `401 Unauthorized` in the browser dev tools Network tab.


Click the `JavaScript` link in the upper right corner in the browser. You should be redirected to the `http://localhost:3000/javascript` route and see the message `This is the JavaScript page.`
You should see `John Peter Susan Anna Emma` below the form.

You should see nothing new in the nodemon terminal.

Fill in the form with the name `bob` and submit the form. You should see `John Peter Susan Anna Emma Bob` below the form and `name: "bob"` in the browser dev tools `Network/people/Request Payload` tab.


You should see nothing new in the nodemon terminal.

#### **Testing the GET, POST, PUT, Patch, and DELETE request via the Postman:**

Open Postman and send the following GET requests: [localhost:3000/api/v1/people](http://localhost:3000/api/v1/people) (GET request to the `/api/v1/people` route  - all people)

You should see the JSON response with the people data:
```
{
    "success": true,
    "data": [
        {
            "id": 1,
            "name": "john"
        },
        {
            "id": 2,
            "name": "peter"
        },
        {
            "id": 3,
            "name": "susan"
        },
        {
            "id": 4,
            "name": "anna"
        },
        {
            "id": 5,
            "name": "emma"
        },
        {
            "id": 6,
            "name": "bob"
        }
    ]
}
```
Send the following GET request: [localhost:3000/api/v1/people/2](http://localhost:3000/api/v1/people/2) (GET request to the `/api/v1/people/2` route - one person with ID 2)

You should see the JSON response with the person data:
```
{
    "success": true,
    "data": {
        "id": 2,
        "name": "peter"
    }
}
```
Send the following GET request: [localhost:3000/api/v1/people/12](http://localhost:3000/api/v1/people/12) (GET request to the `/api/v1/people/12` route - one person with ID 12 (not found))

You should see the JSON response with the message:
```
{
    "success": false,
    "msg": "No person with id 12"
}
```
Send the following POST request: [localhost:3000/api/v1/people](http://localhost:3000/api/v1/people) (POST request to the `/api/v1/people` route - add a new person)

Use following JSON object with a name in the body:
```
{
    "name": "bob"
}
```

you should see the JSON response with the message:
```
{
    "success": true,
    "data": {
        "id": 6,
        "name": "bob"
    }
}
```

Send the following PUT request: [localhost:3000/api/v1/people/6](http://localhost:3000/api/v1/people/6) (PUT request to the `/api/v1/people/6` route - update the person with ID 6)

Use following JSON object with a name in the body:
```
{
    "name": "bobby"
}
```

you should see the JSON response with the message:
```
{
    "success": true,
    "data": {
        "id": 6,
        "name": "bobby"
    }
}
```

Send the following PATCH request: [localhost:3000/api/v1/people/6](http://localhost:3000/api/v1/people/6) (PATCH request to the `/api/v1/people/6` route - update the person with ID 6)

Use following JSON object with a name in the body:
```
{
    "name": "bob"
}
```
You should see the JSON response with the message:
```
{
    "success": true,
    "data": {
        "id": 6,
        "name": "bob"
    }
}
```
Send the following DELETE request: [localhost:3000/api/v1/people/6](http://localhost:3000/api/v1/people/6) (DELETE request to the `/api/v1/people/6` route - delete the person with ID 6)

You should see the JSON response with the message:
```
{
    "success": true,
    "msg": "Person with id 6 has been removed"
}
```
Send the following PUT request: [localhost:3000/api/v1/people/25](http://localhost:3000/api/v1/people/25) (PUT request to the `/api/v1/people` route  - - update the person with ID 25 (not found))

You should see the JSON response with the message:
```
{
    "success": false,
    "msg": "No person with id 25"
}
```
#### **IMPORTANT! Stop the server, press `Ctrl+C` in the terminal.**

### **How To Start Testing Part "Refactoring" of the Assignment:**

Open a terminal and move to `02-express-tutorial` and run the following commands:

```% npm run dev3```

[nodemon] starting `node app_lesson_4_refactoring.js` prompting `Express Tutorial Lesson 4 refactoring` and info that the server is running on http://localhost:3000

Repeat all tests from the previous part "Methods" of the Assignment (line: 309 - 530).

Expected results should be the same as in the previous part "Methods" of the Assignment.

#### **IMPORTANT! Stop the server, press `Ctrl+C` in the terminal.**

### **How To Start Testing Part "Cookie" of the Assignment:**

Open a terminal and move to `02-express-tutorial` and run the following commands:

```% npm run dev4```

```% npm install cookie-parser```

[nodemon] starting `node app_lesson_4_refactoring.js` prompting `Express Tutorial Lesson 4 cookie` and info that the server is running on http://localhost:3000

#### **Testing the GET, POST, and DELETE request via the Postman:**

Open Postman and send the following POST requests: http://localhost:3000/logon (POST request to the `/logon` route  to add new user)
Use following JSON object with a name in the body:
```
{
    "name": "bob"
}
```

You should see the JSON response with the people data:

```
{
    "message": "Hi, Bob"
}
```

Send the following GET request: http://localhost:3000/test (GET request to the `/test` route - test the cookie content)

You should see the JSON response with the people data:

```
{
    "message": "Welcome, Bob"
}
```

Send the following DELETE request: http://localhost:3000/logout (DELETE request to the `/logout` route - delete the cookie)

You should see the JSON response with the people data:

```
{
    "message": "User logged off"
}
```

Send the following GET request: http://localhost:3000/test (GET request to the `/test` route - test the cookie content)

You should see the JSON response with the people data:

```
{
    "error": "Unauthorized"
}
```

Send the following POST requests: http://localhost:3000/logon (POST request to the `/logon` route  to add new user without a name)
Use following JSON object with a name in the body:

```
{
    "name": ""
}
```
You should see the JSON response with the people data:

```
{
    "error": "Please provide a name"
}
```

#### **IMPORTANT! Stop the server, press `Ctrl+C` in the terminal.**
