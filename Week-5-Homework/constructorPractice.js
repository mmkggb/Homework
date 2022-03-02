
// create base constructor class for video game object
class genVideoGame { 
    //add constructor function to create object keys and pass key values, create description variable 
    constructor(rating, name, price){
    this.rating = rating;
    this.name = name;
    this.price = price;

    this.description =  `Attention all parents! This rated "${rating}" game, ${name} costs $${price} to own.`
}

}

// extend base class for video game and add system console parameter
class system extends genVideoGame {
    constructor(rating, name, price, consoleSys){
    super(rating, name, price );
    this.consoleSys = consoleSys;
    }
    greeting(){ 
return `${this.description} Its available on the ${this.consoleSys} console! `
    }
}
// extend base class for video game and add region parameter
class region extends genVideoGame {
    constructor(rating, name, price, ...regArea){
        //inherit parameter properties from parent class
        super(rating, name, price,);
        this.regArea = regArea.join(", ");
    }
    greeting(){
       return `${this.description} Its available in these regions: ${this.regArea} ! `
    }
} 

//  instantiate new class instance
const myGame = new genVideoGame("E", "Mario Party", 45);
const myConsole = new system("M", "Halo 4", 50, "xbox 360")
const northAmerica = new region("T", "FortNite", 75, "Canada", "USA", "Mexico" )

//Print & invoke class instance 
console.log(myGame.description);
console.log(myConsole.greeting());
console.log(northAmerica.greeting());