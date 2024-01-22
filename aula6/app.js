import Car from "./Car.js";
import motorCycle from "./Motorcycle.js"
import Boat from "./Boat.js";
import Motorcycle from "./Motorcycle.js";

const loadData = async (url) => {
    const request = await fetch (url);
    const result = await request.json();

    return result
};

const createLiContent = (data) => {
    const anchor = document.createElement ("button");
    anchor.textContent  = data.brand;

    let image = document.createElement ("img")
    
    console.log (anchor);
    anchor.onclick = () => {
        image.src = `./images/${data.brand}.jpeg`
        document.body.appendChild (image)
        switch (data.type) {
            case "car":
                new Car (data.type, data.brand, data.speed)
                break;

            case "motorcycle":
                new Motorcycle(data.type, data.brand, data.speed)
                break;
        }
    };

    return anchor;
}

const createList = (data) => {

    const ul = document.querySelector ("ul");

    data.forEach(element => {
        let li = document.createElement("li");
        li.appendChild (createLiContent(element))
        ul.appendChild (li)
    });

}

window.onload = async () => {

    const data = await loadData("data.json");

    const ul = createList(data);
};
