let a = 1;
let b = 2;

const changeValue = (valueA, valueB) => {
    valueA = valueA + valueB;
    console.log(valueA);
    valueA = valueA - valueB;
    console.log(Math.abs(valueA));

    valueA = valueB - valueA;
    valueB = valueB - valueA 


    return {valueA : valueA, valueB : valueB};
}

console.log(changeValue(20, 47));
