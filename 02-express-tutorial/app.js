// app.js

// Import the Express module, a popular framework for building web applications
const express = require('express');

// Initialize an Express application instance
const app = express();

// Import the products data
const { products } = require("./data");

// Set up middleware to serve static files from the 'public' directory
app.use(express.static('./public'));

// Set up a route to handle GET requests to the root URL
app.get('/api/v1/test', (req, res) => {
    res.json({ message: "It worked!" });
})

// Set up a route to handle GET requests to the '/api/v1/products' URL
app.get('/api/v1/products', (req, res) => {
    res.json(products)
})

// Set up a route to handle GET requests to the '/api/v1/products/:productID' URL
app.get('/api/v1/products/:productID', (req, res) => {

    // const { productID } = req.params; // Destructure the productID from the request parameters as provided in the tutorial
    // const singleProduct = products.find( (product) => product.id === Number(productID) ) // Find the product by ID as provided in the tutorial

    const idToFind = parseInt(req.params.productID);  // Explicitly parse productID to an integer
    const singleProduct = products.find((p) => p.id === idToFind);  // Find the product by ID

    if(!singleProduct) {
        return res.status(404).json({ message: "That product was not found." });
    }
    console.log(singleProduct);
    return res.json(singleProduct)
})

// Set app.get statement for /api/v1/query, and include logic to handle query strings `search`, `limit`, `maxPrice`, `regexSearch`, and `sort`.
app.get('/api/v1/query', (req, res) => {
    const { search, limit, maxPrice, regexSearch, sort } = req.query;
    let sortedProducts = [...products];

    // Filter by regex or startsWith
    if (regexSearch) {
        try {
            const regex = new RegExp(regexSearch, 'i');
            sortedProducts = sortedProducts.filter((product) => regex.test(product.name));
        } catch (error) {
            return res.status(400).json({ success: false, message: 'Invalid regular expression' });
        }
    } else if (search) {
        sortedProducts = sortedProducts.filter((product) => product.name.startsWith(search));
    }

    // Filter by maxPrice
    if (maxPrice) {
        sortedProducts = sortedProducts.filter((product) => product.price <= parseFloat(maxPrice));
    }

    // Sort by price if specified
    if (sort === 'asc') {
        sortedProducts = sortedProducts.sort((a, b) => a.price - b.price);
    } else if (sort === 'desc') {
        sortedProducts = sortedProducts.sort((a, b) => b.price - a.price);
    }

    // Apply limit if provided
    if (limit) {
        sortedProducts = sortedProducts.slice(0, Number(limit));
    }

    // Handle no matches found
    if (sortedProducts.length < 1) {
        return res.status(200).json({ success: true, data: [] });
    }

    res.status(200).json(sortedProducts);
});


// Handle all routes not matching a static file by sending a 404 response
app.all('*', (req, res) => {
    res.status(404).send('resource not found');
});

// Start the server on port 3000 and log a message to indicate that it's running
app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});

// How to test:
// Open a terminal and move to `02-express-tutorial/app.js`
// run the following command: % npm start
// [nodemon] starting `node app.js`
// Server is running on http://localhost:3000
//_____________________________________________________
// Open a browser and navigate to http://localhost:3000
// You should see the home page from the `public` directory
// _____________________________________________________
// Try navigating to http://localhost:3000/not-there (Returns a 404 response)
// You should see the 404 response
// _____________________________________________________
// Try navigating to http://localhost:3000//api/v1/test (Returns a message indicating that the test worked.)
// You should see the JSON response
// `http://localhost:3000/api/v1/test
//
// {
//   "message": "It worked!"
// }`
// _____________________________________________________
// Try to navigate to http://localhost:3000/api/v1/products (Returns all products.)
// You should see the JSON response with the products data:
// `// http://localhost:3000/api/v1/products
//
// [
//   {
//     "id": 1,
//     "name": "albany sofa",
//     "image": "./image_1.png",
//     "price": 39.95,
//     "desc": "I'm baby direct trade farm-to-table hell of, YOLO readymade raw denim venmo whatever organic gluten-free kitsch schlitz irony af flexitarian."
//   },
//   {
//     "id": 2,
//     "name": "entertainment center",
//     "image": "./image_2.png",
//     "price": 29.98,
//     "desc": "I'm baby direct trade farm-to-table hell of, YOLO readymade raw denim venmo whatever organic gluten-free kitsch schlitz irony af flexitarian."
//   },
//   {
//     "id": 3,
//     "name": "albany sectional",
//     "image": "./image_3.png",
//     "price": 10.99,
//     "desc": "I'm baby direct trade farm-to-table hell of, YOLO readymade raw denim venmo whatever organic gluten-free kitsch schlitz irony af flexitarian."
//   },
//   {
//     "id": 4,
//     "name": "leather sofa",
//     "image": "./image_4.png",
//     "price": 9.99,
//     "desc": "I'm baby direct trade farm-to-table hell of, YOLO readymade raw denim venmo whatever organic gluten-free kitsch schlitz irony af flexitarian."
//   }
// ]`
// _____________________________________________________
// Try to navigate to http://localhost:3000/api/v1/products/2 (Returns the product with ID 2.)
// You should see the JSON response with the product data:
// `// http://localhost:3000/api/v1/products/2
//
// {
//     "id": 2,
//     "name": "entertainment center",
//     "image": "./image_2.png",
//     "price": 29.98,
//     "desc": "I'm baby direct trade farm-to-table hell of, YOLO readymade raw denim venmo whatever organic gluten-free kitsch schlitz irony af flexitarian."
//   },`
// _____________________________________________________
// Try to navigate to http://localhost:3000/api/v1/products/5 (Returns a 404 response if the product is not found, we have only 4 products)
// You should see the JSON response with the message:
// `/ http://localhost:3000/api/v1/products/5
//
// {
//   "message": "That product was not found."
// }`
// and status 404 in the browser dev tools Network tab
// _____________________________________________________
// Try to navigate to http://localhost:3000/api/v1/query?regexSearch=sofa (Returns only products with a name that contains 'sofa'.)
// You should see the JSON response with the product data:
// `// http://localhost:3000/api/v1/query?regexSearch=sofa
//
// [
//   {
//     "id": 1,
//     "name": "albany sofa",
//     "image": "./image_1.png",
//     "price": 39.95,
//     "desc": "I'm baby direct trade farm-to-table hell of, YOLO readymade raw denim venmo whatever organic gluten-free kitsch schlitz irony af flexitarian."
//   },
//   {
//     "id": 4,
//     "name": "leather sofa",
//     "image": "./image_4.png",
//     "price": 9.99,
//     "desc": "I'm baby direct trade farm-to-table hell of, YOLO readymade raw denim venmo whatever organic gluten-free kitsch schlitz irony af flexitarian."
//   }
// ]`
// _____________________________________________________
// Try to navigate to http://localhost:3000/api/v1/query?maxPrice=20 (Returns only products with a price less than or equal to 20.)
// You should see the JSON response with the product data:
// `// http://localhost:3000/api/v1/query?maxPrice=20
//
// [
//   {
//     "id": 3,
//     "name": "albany sectional",
//     "image": "./image_3.png",
//     "price": 10.99,
//     "desc": "I'm baby direct trade farm-to-table hell of, YOLO readymade raw denim venmo whatever organic gluten-free kitsch schlitz irony af flexitarian."
//   },
//   {
//     "id": 4,
//     "name": "leather sofa",
//     "image": "./image_4.png",
//     "price": 9.99,
//     "desc": "I'm baby direct trade farm-to-table hell of, YOLO readymade raw denim venmo whatever organic gluten-free kitsch schlitz irony af flexitarian."
//   }
// ]`
// _____________________________________________________
// Try to navigate to http://localhost:3000/api/v1/query?sort=asc (Sorts the products by price in ascending order.)
// You should see the JSON response with the product data:
// `// http://localhost:3000/api/v1/query?sort=asc
//
// [
//   {
//     "id": 4,
//     "name": "leather sofa",
//     "image": "./image_4.png",
//     "price": 9.99,
//     "desc": "I'm baby direct trade farm-to-table hell of, YOLO readymade raw denim venmo whatever organic gluten-free kitsch schlitz irony af flexitarian."
//   },
//   {
//     "id": 3,
//     "name": "albany sectional",
//     "image": "./image_3.png",
//     "price": 10.99,
//     "desc": "I'm baby direct trade farm-to-table hell of, YOLO readymade raw denim venmo whatever organic gluten-free kitsch schlitz irony af flexitarian."
//   },
//   {
//     "id": 2,
//     "name": "entertainment center",
//     "image": "./image_2.png",
//     "price": 29.98,
//     "desc": "I'm baby direct trade farm-to-table hell of, YOLO readymade raw denim venmo whatever organic gluten-free kitsch schlitz irony af flexitarian."
//   },
//   {
//     "id": 1,
//     "name": "albany sofa",
//     "image": "./image_1.png",
//     "price": 39.95,
//     "desc": "I'm baby direct trade farm-to-table hell of, YOLO readymade raw denim venmo whatever organic gluten-free kitsch schlitz irony af flexitarian."
//   }
// ]`
// _____________________________________________________
// Try to navigate to http://localhost:3000/api/v1/query?limit=2 (Returns only the first 2 products in the list.)
// You should see the JSON response with the product data:
// `// http://localhost:3000/api/v1/query?limit=2
//
// [
//   {
//     "id": 1,
//     "name": "albany sofa",
//     "image": "./image_1.png",
//     "price": 39.95,
//     "desc": "I'm baby direct trade farm-to-table hell of, YOLO readymade raw denim venmo whatever organic gluten-free kitsch schlitz irony af flexitarian."
//   },
//   {
//     "id": 2,
//     "name": "entertainment center",
//     "image": "./image_2.png",
//     "price": 29.98,
//     "desc": "I'm baby direct trade farm-to-table hell of, YOLO readymade raw denim venmo whatever organic gluten-free kitsch schlitz irony af flexitarian."
//   }
// ]`
// _____________________________________________________
// Try to navigate to http://localhost:3000/api/v1/query?search=albany&limit=1 (Returns only the first product in the list that starts with 'albany'.)
// You should see the JSON response with the product data:
// `/ http://localhost:3000/api/v1/query?search=albany&limit=1
//
// [
//   {
//     "id": 1,
//     "name": "albany sofa",
//     "image": "./image_1.png",
//     "price": 39.95,
//     "desc": "I'm baby direct trade farm-to-table hell of, YOLO readymade raw denim venmo whatever organic gluten-free kitsch schlitz irony af flexitarian."
//   }
// ]`
// _____________________________________________________
// Try to navigate to http://localhost:3000/api/v1/query?search=albany&limit=1&maxPrice=20
// (Returns only the first product in the list that starts with 'albany' and has a price less than or equal to 20.)
// You should see the JSON response with the product data:
// `// http://localhost:3000/api/v1/query?search=albany&limit=1&maxPrice=20
//
// [
//   {
//     "id": 3,
//     "name": "albany sectional",
//     "image": "./image_3.png",
//     "price": 10.99,
//     "desc": "I'm baby direct trade farm-to-table hell of, YOLO readymade raw denim venmo whatever organic gluten-free kitsch schlitz irony af flexitarian."
//   }
// ]`
// _____________________________________________________
// Navigate to http://localhost:3000
// Click `Fetch Products` button in the browser
// You should see the list of products displayed in the browser, including the product name, image, price, and description

// To stop the server, press Ctrl+C in the terminal
