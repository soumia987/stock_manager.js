const { json } = require("stream/consumers");
const Product = require("./product");
const fs=require("fs");
const prompt = require("prompt-sync")();

// open json file
let products = fs.readFileSync("produit.json"); // STRING
products = JSON.parse(products); // TABLE



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

    fs.writeFileSync("produit.json", JSON.stringify(products,null,4
    
    ));



}

//show product
function showproduct(){
   console.log(products);
   
}

//update product
function updateProduct(){
}
//delete product

function deleteProduct(){
   let id =  prompt("entrer le numero du produit à supprimer: ");
   products.splice(id - 1, 1);
   
   fs.writeFileSync("produit.json", JSON.stringify(products,null,4));
}4


{
    let option;

    

    while (true)
    {
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
            case'4':
                 deleteProduct();
            case'5':
               
            default:
                console.log("Option invalide");
                break;
        }
    }

}

 