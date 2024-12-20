const fs = require('fs');
const Product = require("./product"); // Assuming the Product class is properly imported
const prompt = require("prompt-sync")();

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

// Show menu
function showMenu() {
    console.log("Menu principal :\n" +
                "1 - Ajouter un produit\n" +
                "2 - Afficher tous les produits\n" +
                "3 - Modifier un produit\n" +
                "4 - Supprimer un produit\n" +
                "0 - Quitter\n");
}

// Add a new product
function AddProduct() {
    const name = prompt('Nom du produit: ');
    const description = prompt('Description du produit: ');
    const quantity = parseInt(prompt('Quantité: '), 10);
    const price = parseFloat(prompt('Prix: '));

    const newProduct = new Product(uuidv4(), name, description, quantity, price);
    
    const products = readData();
    products.push(newProduct);
    writeData(products);
    
    console.log('Produit ajouté:', newProduct);
}

// Show all products
function showProducts() {
    const products = readData();
    if (products.length === 0) {
        console.log("Aucun produit dans l'inventaire.");
    } else {
        console.log("Liste des produits :");
        products.forEach(product => {
            console.log(`ID: ${product.id}, Nom: ${product.name}, Description: ${product.description}, Quantité: ${product.quantity}, Prix: ${product.price}`);
        });
    }
}

// Update a product by ID
function updateProduct() {
    const id = prompt('Entrez l\'ID du produit à modifier: ');
    const products = readData();
    const product = products.find(p => p.id === id);

    if (product) {
        const newName = prompt(`Nouveau nom (actuel: ${product.name}): `) || product.name;
        const newDescription = prompt(`Nouvelle description (actuelle: ${product.description}): `) || product.description;
        const newQuantity = parseInt(prompt(`Nouvelle quantité (actuelle: ${product.quantity}): `), 10) || product.quantity;
        const newPrice = parseFloat(prompt(`Nouveau prix (actuel: ${product.price}): `)) || product.price;

        product.name = newName;
        product.description = newDescription;
        product.quantity = newQuantity;
        product.price = newPrice;

        writeData(products);
        console.log('Produit mis à jour:', product);
    } else {
        console.log('Produit introuvable');
    }
}

// Delete a product by ID
function deleteProduct() {
    const id = prompt('Entrez l\'ID du produit à supprimer: ');
    const products = readData();
    const updatedProducts = products.filter(product => product.id !== id);

    if (updatedProducts.length === products.length) {
        console.log('Produit introuvable');
    } else {
        writeData(updatedProducts);
        console.log('Produit supprimé');
    }
}

// Main loop
function main() {
    let option;

    while (true) {
        showMenu();
        option = prompt('Veuillez entrer votre choix: ');

        switch (option) {
            case '1':
                AddProduct();
                break;
            case '2':
                showProducts();
                break;
            case '3':
                updateProduct();
                break;
            case '4':
                deleteProduct();
                break;
            case '0':
                console.log("Au revoir !");
                return; // Exit the program
            default:
                console.log("Option invalide, veuillez réessayer.");
                break;
        }
    }
}

main();
