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

// Please find instructions on how to run and how to test this code in the `README.md` file.