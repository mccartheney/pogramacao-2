const addNumbers = (numb1, numb2)  => {
    return numb1 + numb2;
}

console.log(addNumbers (1, 2));

let praia = "praia";

if (praia == "praia") {
    console.log("e praia");
} else {
    console.log("nao e praia");
}

console.log(10 == "10");
console.log(10 === "10");

10 == "10" ? console.log(true) : console.log(false);

let number = 20
switch (number) {
    case 20:
        console.log(true);
        break;

    default:
        console.log(false);
        break;
}

let number2 = 40

if (number ==="20" && number2 == 40) {
    console.log(false);
}


if (number == 20 || number2 == 40) {
    console.log(true);
}

let whileNum = 1;

while (whileNum < 20) {
    console.log(whileNum);
    whileNum++;
}


let consolas = ["play", "xbox", "nintendo"]

for (let i = 0; i < consolas.length; i++) {
    console.log(consolas[i]);
}