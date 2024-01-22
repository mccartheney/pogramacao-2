import Veiculo from "./Veiculo.js";

 export default class Motorcycle extends Veiculo {

    constructor() {
        super();

        console.log(this.type, this.brand, this.speed);
    }
}
