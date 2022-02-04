// Inside your JS file, create two variables: pizzaPlace and numberOfToppings
// Have the variables reference the name of your Pizza Place and the number of toppings your Pizza Place offers.
// Print the variables and their types.
// Print a template literal that uses both variables to construct a short sentence about your Pizza Place.
// Construct an if statement that prints "Quality, not quantity." if you offer less than 10 toppings, or "A whole lot of pizza." if you offer 10 or more toppings.
// Add, commit, and push your JS file to your GitHub repo.
// Send your TA a link to your GitHub Homework repo when finished.

let pizzaPlace = "Mikey's Pizza";
let numberOfToppings = 8;
let y = typeof(pizzaPlace);
let z = typeof(numberOfToppings);
console.log(`My pizza ${y} name is ${pizzaPlace} who happens to offer ${numberOfToppings} ${z} of amazing toppings!`);
(numberOfToppings<10) ? console.log("Quality, not quantity is our model") : console.log("A whole lot of pizza");

// Bonus Challenge
// Use a loop to print all of the even numbers from 1 to numberOfToppings (or 10)
let x = 0;
for (i=1; i<=numberOfToppings; i++)
{
    x = i;
    (x%2===0) ? console.log(x) : null; 
     
}
