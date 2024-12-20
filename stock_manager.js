
const Product = require("./product");
const fs=require("fs");
const prompt = require("prompt-sync")();

// open json file
let products = fs.readFileSync("produit.json"); // STRING
products = JSON.parse(products); // TABLE


//AFFICHER MENU
function showMenu(){ 
 
    console.log("Menu principale:\n" +
                "1 - Ajouter un produit\n" +
                "2 - Afficher tous les produits\n" +
                "3-modifier un produit\n"+
                "4-supprimer un produit\n"+
                "0 - quitter\n");
}
 
//add product
function AddProduct(){
    const name=prompt("Nom du produit: ");
    const description=prompt("description du produit: ");
    const quantity= parseInt(prompt("quantity du produit: "));
    const price= parseFloat(prompt("prix du produit: "));
    
    let objet={
        name: name,
        description:description,
        price:price,
        quantity:quantity,
    }

    products.push(objet);

    fs.writeFileSync("produit.json", JSON.stringify(products,null,4));
}

//show product
function showproduct(){
   console.log(products);
   
}

//update product
function updateProduct(){
    let id = parseInt(prompt("entrer le numero du produit à modifier:"));
    if(id < 1 || id > products.length){
        console.log("produit non trouvé.");
        return;
    }

    let name = prompt("Nom du produit: ");
    let description = prompt("description du produit: ");
    let quantity = parseInt(prompt("quantity du produit: "));
    let price = parseFloat(prompt("prix du produit: "));


    products[id-1].name = name;
    products[id-1].description = description;
    products[id-1].quantity = quantity;
    products[id-1].price = price;

    // Corrected line
    fs.writeFileSync("produit.json", JSON.stringify(products, null, 4));
}


//delete product

function deleteProduct(){
   let id = parseInt( prompt("entrer le numero du produit à supprimer: "));
   if(id<1 || id>products.length){
    console.log("produit non trouvé.");
    return;
}
   products.splice(id - 1, 1);
   
   fs.writeFileSync("produit.json", JSON.stringify(products));
}



    let option;
    while (true) {
        showMenu();
        option = prompt('veuillez entrer votre choix: ');
        switch (option) {
            case '1':
                AddProduct();
                break;
            case '2':
                showproduct();
                break; 
            case'3':
                 updateProduct()
                 break;
            case'4':
                 deleteProduct();
                 break;
            case'5':
                 console.log("au revoir");
                 break;
               
            default:
                console.log("Option invalide");
                break;
        }
    }


 