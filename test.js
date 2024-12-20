const fs = require('fs');
const Product = require('./product');
const { v4: uuidv4 } = require('uuid'); // To generate unique IDs

const filePath = './products.json';

// Ensure the JSON file exists, or create it if not
if (!fs.existsSync(filePath)) {
    fs.writeFileSync(filePath, JSON.stringify([]), 'utf8');
}

// Read the products data from the JSON file
function readData() {
    return JSON.parse(fs.readFileSync(filePath, 'utf8'));
}

// Write products data back to the file
function writeData(products) {
    fs.writeFileSync(filePath, JSON.stringify(products, null, 2), 'utf8');
}

// Create a new product
function createProduct(name, description, quantity, price) {
    const newProduct = new Product(uuidv4(), name, description, quantity, price);
    const products = readData();
    products.push(newProduct);
    writeData(products);
    console.log('Product added:', newProduct);
}

// Get a product by ID
function getProductById(id) {
    const products = readData();
    return products.find(product => product.id === id);
}

// Update a product by ID
function updateProduct(id, updatedFields) {
    const products = readData();
    const product = products.find(product => product.id === id);
    if (product) {
        Object.assign(product, updatedFields);
        writeData(products);
        console.log('Product updated:', product);
    } else {
        console.log('Product not found!');
    }
}

// Delete a product by ID
function deleteProduct(id) {
    const products = readData();
    const updatedProducts = products.filter(product => product.id !== id);
    writeData(updatedProducts);
    console.log('Product deleted!');
}

// Example usage:

// Create some products
createProduct('Laptop', 'High-end laptop', 10, 1500);
createProduct('Phone', 'Smartphone with great features', 50, 500);

// Read a product by ID (replace 'some-product-id' with a real ID)
const product = getProductById('some-product-id');
console.log(product);

// Update a product (replace 'some-product-id' with a real ID)
updateProduct('some-product-id', { quantity: 8 });

// Delete a product (replace 'some-product-id' with a real ID)
deleteProduct('some-product-id');
