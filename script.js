function pizzaOven(bread, sauce, cheese, toppings) {
    var pizza = {}; 

    pizza.bread = bread; 
    pizza.sauce = sauce; 
    pizza.cheese = cheese; 
    pizza.toppings = toppings;  

    return pizza; 
}

var p1 = pizzaOven("deep dish", "traditional", ["mozzarella"], ["pepporoni", "sausage"]); 
// var p2 = pizzaOven("hand tossed", "marinara", ["mozzarella", "feta"], ["mushrooms", "olives", "onions"]);
// var p3 = pizzaOven("sourdough", "tomatoe", "swiss", "pepperoni");
// var p4 = pizzaOven("wheat", "salsa verde", "blue cheese", "bacon");
console.log(p1); 
console.log(p2);
console.log(p3);
console.log(p4);

function randomPizza(bread, sauce, cheese, toppings) {
    var diffPizza = {}; 

    diffPizza.bread = bread[Math.floor(Math.random()*3)]; 
    diffPizza.sauce = sauce[Math.floor(Math.random()*3)]; 
    diffPizza.cheese = cheese[Math.floor(Math.random()*3)]; 
    diffPizza.toppings = toppings[Math.floor(Math.random()*3)];

    return diffPizza; 
}

var p5 = randomPizza(
    ["deep dish", "hand tossed", "sourdough"],
    ["traditional", "marinara", "tomatoe"],
    ["mozzarella", "swiss", "blue cheese"],
    ["pepperoni", "mushrooms", "olives"]
    );


console.log(p5);

