console.log("iniciando");

window.onload = () => {
    console.log("ta on");
}

console.log("ainda iniciando");

const add2Numbers = (a,d) => {
    return a+d
};

const result = add2Numbers(2, 4);

console.log(result);

const times2Numbers = (c,d) => {
    return c*d;
}

const resultTimes = times2Numbers (4,4);

console.log(resultTimes);

const timesSomethingBy2 = (thing) => {
    return thing * 2
}

const somethingTimes2  = timesSomethingBy2 (add2Numbers (2,4));

console.log(somethingTimes2);

const arraySum = [1,2,3,4,5,6,7,8,9,10];

const mediaArray = (array) => {
    let totalSum = 0;

    array.forEach(element => {
        totalSum += element
    });

    let media = totalSum / arraySum.length;
    return media
};

console.log(mediaArray(arraySum));


const showArray = (array) => {
    array.forEach(element => {
        console.log(element);
    });
}

showArray (arraySum)

