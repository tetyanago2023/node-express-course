Please find below instructions on how to run and how to test the Express tutorial project.

### **How To Start:**

Open a terminal and move to `02-express-tutorial` and run the following commands:

```% npm install```

```% npm start```

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
