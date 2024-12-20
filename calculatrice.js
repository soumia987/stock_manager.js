let prompt = require("prompt-sync")();


//FONCTION D'ADDITION
function add(num1,num2){
    return num1+num2;
}
//FONCTION DE SOUSTRACTION
function substract(num1,num2){
        return num1-num2;
}
//FUNCTION DE MULTIPLICATION
function MULTIPLICATION(num1,num2){
    return num1*num2;
}
//FUNCTION DE DIVISION
function DIVISION(num1,num2){
    
    if(num2===0) return'division par zero est impossible';
    return num1/num2;
}
//FUNCTION DE RACINE CARRE
function racinecarre(num1){
    return Math.sqrt(num1);
}
//FUNCTION DE PUISSANCE
function puissance(num1,num2){
    return num1**num2;
}
//FUNCTION DE FACTORIELLE
function factorielle(num1){
    let re=1;
    for(let i=num1;i>=1;i--)
        re =re*i;
    return re;
    
}
//AFFICHER LE MENU 
function afficherMenu(){ 
 console.log('---------calculatrice-------');
 console.log('1-/addition');
 console.log('2-/SOUSTRACTION');
 console.log('3-/MULTIPLICATION');
 console.log('4-/DIVISION');
 console.log('5-/RACINE CARRE');
 console.log('6-/FACTORIELLE');
 console.log('7-/puissance');
 console.log('8-/Quitter');
 console.log('-----------------------------');
}

;
let choix ;
let result;
let num1,num2;
function calculatrice(){
    afficherMenu();
    choix = Number(prompt('entrer votre choix: '));
    
    switch (choix) {
    case 1:
        num1=Number(prompt('entrer le premier nombre: '));
        num2=Number(prompt('entrer le deuxieme nombre: '));
        result=add(num1,num2);
        console.log('resultat= ' + result);
        calculatrice();
        break;
    case 2:
        num1=Number(prompt('entrer le premier nombre: '));
        num2=Number(prompt('entrer le deuxieme nombre: '));
        result=substract(num1,num2);
        console.log('resultat= ' + result);
        calculatrice();
        break;
    case 3:
        num1=Number(prompt('entrer le premier nombre: '));
        num2=Number(prompt('entrer le deuxieme nombre: '));
        result=MULTIPLICATION(num1,num2);
        console.log('resultat= ' + result);
        calculatrice();
        break;
    case 4:
        num1=Number(prompt('entrer le premier nombre: '));
        num2=Number(prompt('entrer le deuxieme nombre: '));
        result=DIVISION(num1,num2);
        console.log('resultat= ' + result); 
        calculatrice();
        break;
    case 5: 
        num1=Number(prompt('entrer le premier nombre: '));  
        result=racinecarre(num1);
        console.log('resultat= ' + result); 
        calculatrice();
        break; 
    case 6: 
        num1=Number(prompt('entrer le premier nombre: ')); 
        result=factorielle(num1);
        console.log('resultat= ' + result); 
        calculatrice();
    case 7:
        num1=Number(prompt('entrer le premier nombre :'));
        num2=Number(prompt('entrer le deuxieme nombre: '));   
        result=puissance(num1);
        console.log('resultat= ' + result); 
        calculatrice(); 
    case 8:
        return ;
    default:
        console.log('choix invalide');
        calculatrice();
        break;
   }
}

calculatrice();