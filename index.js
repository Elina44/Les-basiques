//Cours 7 : JavaScript Basics
//Créer une fonction :

function toto() {
    //instruction
    return "toto";
}
console.log(toto());

//ou à la place:

function tata() {
    console.log("tata");
}
tata();


//Fonction avec paramètre :

function sayHello(firstName, lastName){
    console.log(`Hello ${firstName} ${lastName}`)
}
sayHello("Mickey", "Mouse");



function sum(a, b){
    return a + b;
}
//ou
const sum = (a,b) => {
    return a+b;
};
//en fonction fléchée on aura :
const sum = (a+b) => a + b 



//Autre exemple :
let userNumber = 2;
function double (){
    userNumber = userNumber * 2;
}
//ou :
let userNumber = 2;
function double(number){
    return number * 2;
}
//ou :
let userNumber = 2;
userNumber = double(userNumber);


//Les conditions if et else :
const name = "Paul";
if(name === "Paul"){
    console.log("Welcome, Paul");
}
else{
    console.log("Go away !");
}

//On peut remplacer if et else par du ternaire => if = true = ?
//et else = false = :
function getFee(isMember){
    return (isMember ? `$2.00` : `$10.00`);
}
console.log(getFee(true)); //on paiera 2$
console.log(getFee(false));//on paiera 10$


//Utilisation switch :
let userCountry = prompt("Where are you from ?");

switch(userCountry){
    case "France":
        console.log("Bonjour");
        break;
    case "England":
        console.log("Hello");
        break;
    case "Germany":
        console.log("Hallo");
        break;
    case "Italy":
        console.log("Ciao");
        break;
    default:
        console.log("Hey there");
        break;
}

//Les opérateurs : modulo, *, /, !=, etc...
//Les opérateurs logiques : && et ||

