class Inventory {
    
    id_counter = 0;
    products = [];

    AddProduct(){

        let prod = new Product();
    
        prod.id = id_counter;
    
        prod.name = prompt("enter name of product: ");
        prod.description = prompt("enter description of product: ");
        prod.quantity=Number(prompt("enter quantity of product: "));
        prod.price = +prompt("enter price of product: ");
    
        id_counter++;

    }

}