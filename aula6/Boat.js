import Veiculo from "./Veiculo.js";

export default class Boat extends Veiculo {

    constructor() {
        super();


        console.log(this.type, this.brand, this.speed);
    }
}