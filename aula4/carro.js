import Veiculo from "./veiculo.js";

class Carro extends Veiculo {
    constructor() {
        super();
        this.speed = 20;
        console.log(this.speed);
    }
}

export default Carro;