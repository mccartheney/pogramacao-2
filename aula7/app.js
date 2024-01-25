import Car from "./Car.js";
import Motorcycle from "./Motorcycle.js";
import Boat from "./Boat.js";

let currentVehicle;

const loadData = async (url) => {

  const request = await fetch(url);
  const result = await request.json();

  return result;
}

const createLiContent = (item) => {
  const button = document.createElement("button");
  button.innerText = item.brand;

  button.onclick = () => {
    if(currentVehicle) {
      currentVehicle.destroy();
    }

    switch (item.type) {
      case "car":
        currentVehicle = new Car(item);
        break;
      case "motorcycle":
        currentVehicle = new Motorcycle(item);
        break;
      case "boat":
        currentVehicle = new Boat(item);
        break;
    }
  }
  return button;
}

const createList = (data) => {
  const ul = document.querySelector("ul");
  data.forEach(item => {
    const li = document.createElement("li");
    li.appendChild(createLiContent(item));
    ul.appendChild(li);
  });
}

let isPlaying = null;

const play = () => {
  document.querySelector(".play_pause").textContent = "play";
  document.querySelector(".play_pause").classList.add("green")
  document.querySelector(".play_pause").classList.remove("red")
  isPlaying = setInterval(() => {
    console.log("tetse");
  }, 1000);
}

const stop = () => {
  document.querySelector(".play_pause").textContent = "stop"
  document.querySelector(".play_pause").classList.add("red")
  document.querySelector(".play_pause").classList.remove("green")
  clearInterval(isPlaying);
  isPlaying = null;
}

const playAnimation = () => {

  
}

window.addEventListener("load", async() => {
  
  const data = await loadData("data.json");
  data.sort((a, b) => a.type.localeCompare(b.type));
  
  const ul = createList(data);
  console.log("pk");



  document.querySelector(".play_pause").addEventListener("click", () => {
    if (isPlaying) {
      stop();
    }else {
      play();
    }
  })
});