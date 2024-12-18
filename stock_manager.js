const Product = require("./product");

const prompt = require("prompt-sync")();
//const inventory = require("./inventory")();


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
    
}

//show product
function showMenu(){
}

//update product
function updateProduct(){
}
//delete product

function deleteProduct(){
}

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
                showMenu();
                break; 
            case'3':
                 updateProduct()
            case'4':
                 deleteProduct();
            case'5':
                Quitter();     
            default:
                console.log("Option invalide");
                break;
        }
    }

}

 