import  Veiculo from "./Veiculo.js";

 export default class Car extends Veiculo {

    constructor() {
        super();

        console.log(this.type, this.brand, this.speed);
    }

    build () {
        let image = document.createElement("img")
        image.src = `./images/${data.brand}.jpeg`
        
    }
}