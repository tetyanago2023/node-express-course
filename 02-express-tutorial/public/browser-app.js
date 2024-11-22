// browser-app.js

// Select the navigation toggle button and links container
const navToggle = document.querySelector('.nav-toggle');
const links = document.querySelector('.links');

// Toggle the visibility of the navigation links when the nav-toggle button is clicked
navToggle.addEventListener('click', function () {
  links.classList.toggle('show-links');
});

// Add an event listener to the 'Fetch Products' button
document.getElementById('fetchProductsBtn').addEventListener('click', fetchProducts);

// Function to fetch products from the API
function fetchProducts() {
  fetch('/api/v1/products') // Fetch data from /api/v1/products endpoint
      .then(response => {
        // Check if the response is successful
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        // Parse the response JSON data
        return response.json();
      })
      .then(data => {
        // Pass the fetched data to displayProducts function for rendering
        displayProducts(data);
      })
      .catch(error => {
        // Log any errors if the fetch operation fails
        console.error('There was a problem with the fetch operation:', error);
      });
}

// Function to display the fetched products in the HTML
function displayProducts(products) {
  const container = document.getElementById('productsContainer'); // Select the products container
  container.innerHTML = ''; // Clear any existing content in the container

  // Loop through each product in the data array
  products.forEach(product => {
    const productDiv = document.createElement('div'); // Create a new div for each product
    productDiv.classList.add('product'); // Add 'product' class for styling

    // Set the inner HTML of the product div with product details
    productDiv.innerHTML = `
      <h3>${product.name}</h3>
      <img src="${product.image}" alt="${product.name}" class="product-img" 
           onerror="this.src='./images/placeholder.jpg'">
      <p>Price: $${product.price}</p>
      <p>${product.desc}</p>
    `;

    // Append the product div to the main products container
    container.appendChild(productDiv);
  });
}

