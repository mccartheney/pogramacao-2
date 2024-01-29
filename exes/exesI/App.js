let var1 = 2;
let var2 = 5;

const changeOrder = (valueA, valueB) => {
    var2 = valueA
    var1 = valueB;
};

changeOrder (var1, var2);
console.log(var1, var2);

const isEven = (number) => {
    return number % 2 == 0;
};

console.log(isEven(2));
console.log(isEven(3));

const array = [2, 123, 34, 65, 48];

const evenElements = (Array) => {
    Array.forEach(element => {
        if (isEven(element)) {
            console.log(element);
        }
    });
}

evenElements(array)

const sumElements = (numb1, numb2) => {
    return numb1 + numb2;
}

console.log(sumElements(5,7));

class Pessoa {
    constructor (name, age, gender) {
        this.name = name;
        this.age = age;
        this.gender = gender;
    }

    showAll(){
        return {
            name : this.name, 
            age : this.age,
            gender : this.gender,
        };
    }
}

let person = new Pessoa ("Mccartheney Mendes", 19, "Male");
for (const [key, value] of Object.entries(person.showAll())) {
    console.log(`the ${key} is ${value}`);
}

const fibonacci = (number) => {
    let n1 = 0, n2 = 1, nextTerm;
    
    for (let i = 1; i <= number; i++) {
        console.log(n1);
        nextTerm = n1 + n2;
        n1 = n2;
        n2 = nextTerm;
    }
}

fibonacci(10);

const  procura = async () => {
    const response = await fetch("data.json");
    console.log(await response.json());
};

window.onload = () => {
    document.querySelector("button").onclick = () => {
        document.querySelector("p").innerText = "button clicked";
    }

    const dados = procura ();
}
