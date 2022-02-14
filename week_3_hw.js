// Created Array with four toppings - satisfies 1st task
let arry = ["Chicken", " Beef", " Pepper", " Olive"];
// store array in global variable x for short hand 
let x = arry;
// Created greeting function that welcomes customer and cycles thru array elements - satisfies 2nd task
function greetCustomer(){    
    //Declare greeting message to customer 
    let greetNote = `Welcome to our Pizza shop, we have the following toppings to offer: `;
    
    // for statement that cycles through array indexes and stores element value in ary local scope variable
    for(let ary of arry){
        
    //concatenate array values to greeting string with template literal
    greetNote+=` ${ary}`;      
     }
     // log greeting message to print screen
     console.log(greetNote + '\n');
 }

//Instantiate pizza object to reference keys and key pair value for customer order example
 const pizzaObj = {
    size: "large",
    crust: "thin",
    toppings: x,
    total: "$25",
    // empty topping array for bonus task # 10
    toppings2: []
 }
// Created pizza order function with size, crust, and indefinite topping parameters - satisfies 3rd task
function getPizzaOrder(size, crust, ...toppings){
    // Log Screen with pizza order description with the functions 3 input parameters included  
    // Order is being recorded and logged out to console 
    // If statement that determines empty list for toppings, satisfies bonus task #9
    (toppings!==null) ?
    console.log(`One ${size} ${crust} crust pizza with ${toppings}, ... coming up!`+ '\n')
    : console.log(`One ${size} ${crust} crust cheese pizza ... coming up!`+ '\n');

    // Array declaration of created pizza parameters 
    let pizzaBuildAry = ["size", "crust", "toppings"];

    // pass pizza parameters to preparePizza function as an array 
    // return function
    return preparePizza(p=pizzaBuildAry);
}
// Created an function that that prints pizza object properties and accepts an array parameter  - satisfies task 4
function preparePizza([]){    
  
    // Instantiate new pizza empty object to pass into servePizza function
 const pzObj2 = {};

 // Declared message variable for log screen - pizza is being cooked
 let msg = `Cooking pizza order for ... `;

// Created i variable to store iterated elements value in p array  
 for(let i of p)
 {
// console out array value as an key to the object and the object associating key pair value
// saving iterated values of topping array and key values of pizza object to msg string variable
 msg = msg + ` ${i} : ${pizzaObj[i]}, `;
 // Instaiting new pizza object key and key-value
if(i==="size"){
pzObj2.size = pizzaObj[i];
 }
 else if(i==="crust"){
pzObj2.crust = pizzaObj[i];
 }
 else{
pzObj2.toppings = pizzaObj[i];
 }

 }
  //console pizza key and key-values from object - pizza status
 console.log(msg + '\n');
 
// Pass newly created pizza object as an parameter to the servePizza function
// return function
return servePizza(pzObj2);
}
// Created function to display order done, passed pizza object and print contents - satisfies 5th task
function servePizza(pieObj){

    // prints order done message and object key-pair value for size, crust, and topping keys
    console.log(`"Order up! Here's your ${pieObj.size} ${pieObj.crust} crust pizza with ${pieObj.toppings}, ... Enjoy!"` + '\n')
    console.log("Here's your receipt! " +  '\n' )

    // print pizza object contents
  console.log(pieObj);
}

// Bonus task #9 / insert & into array in the array.lenth-2 index
function listToppings(){
    //start tells splice method where to start in index modification 
    let start = x.length-1;
    // deleteCount parameter removes indicated value of elements
    let deleteCount = 0;
    // splice array methods allows for insertion of new element value within the middle of the pre-existing array
    x.splice(start, deleteCount, '&');
    // Create display message of favorite pizza toppings
    let bookmarkPizza = "Do you want to save toppings list to your profile? "
    for (let toppers of x){
        bookmarkPizza+=` ${toppers}, ` 
    }

    // print out topping details with included ampersand in the second position from last item
     console.log(bookmarkPizza);

     /* Lol this junk of code did not work for me but I was proud of myself
    //let toppingMsg = " Your toppings are : ";
    //let y = x[x.length-2];
    //let y = x.length-2;
    //x[y] = x.push("&");
    //[y]= x[length-2].push('&');
    //y = x.push('&');
    // for(let top of x){
    //     toppingMsg+= ` ${top}`;
    // }
    // console.log(toppingMsg);
    */
}
//Call functions
greetCustomer();
//call pizzaOrder function with pizzaObj key values
getPizzaOrder(pizzaObj.size, pizzaObj.crust, pizzaObj.toppings);
listToppings();
//servePizza(pizzaObj);