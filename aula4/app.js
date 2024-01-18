import Carro from "./carro.js";
import Moto from "./moto.js";

const fibonacci = (numbQuant) => {
    let numb1 = 0
    let numb2 = 1

    for (let index = 0; index < numbQuant; index++) {

        console.log(numb1);
        console.log(numb2);
        numb1 = numb1 + numb2
        numb2 = numb2 + numb1
    }
};

fibonacci (10)

let user = {
    id : 0,
    name : "mccartheney",
    age : 19,
    gender : "male",
    dob : "02/04/2004",
    hobbies : ["code", "play"]
};

console.log (user)

let info = [
    "normal",
    "UPPERCASE",
    "me"
]

let infoFunction = info.map( (InfoArg) => {
    if (InfoArg == "me") {
        return InfoArg.toUpperCase()
    }
    return InfoArg
})

console.log(infoFunction);

class User {

    constructor (user) {
        this.name = user.name;
        this.age = user.age;
        console.log("constuctor inialized");
    }

    getName() {
        return this.name
    }

    getAge() { 
        return this.age
    }
}

const newUser = new User (user);
console.log(newUser.getAge());

let car = new Carro ();
let motoCicle = new Moto ();

console.log(car, motoCicle);