class genVideoGame { constructor(rating, name, price){
    this.rating = rating;
    this.name = name;
    this.price = price;

    this.description =  `Attention all parents! This rated "${rating}" game, ${name} costs $${price} to own.`
}

}

class system extends genVideoGame {
    constructor(rating, name, price, consoleSys){
    super(rating, name, price );
    this.consoleSys = consoleSys;
    }
    greeting(){ 
return `${this.description} Its available on the ${this.consoleSys} console! `
    }
}

class region extends genVideoGame {
    constructor(rating, name, price, ...regArea){
        super(rating, name, price,);
        this.regArea = regArea.join(", ");
    }
    greeting(){
       return `${this.description} Its available in these regions: ${this.regArea} ! `
    }
}
const myGame = new genVideoGame("E", "Mario Party", 45);
const myConsole = new system("M", "Halo 4", 50, "xbox 360")
const northAmerica = new region("T", "FortNite", 75, "Canada", "USA", "Mexico" )
console.log(myGame.description);
console.log(myConsole.greeting());
console.log(northAmerica.greeting());